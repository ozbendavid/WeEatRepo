require 'json'
class ZomatoDataGrabbingWorker
  include Sidekiq::Worker
  include Faraday

  def perform(*args)
    puts 'Start Downloading Data From Zomato...'

    conn = prepare_connection

    response = fetch_restaurants_list(conn)

    repo_info = JSON.parse response.body

    # iterating all restaurants
    repo_info['restaurants'].each do |restaurant|
      create_restaurant(conn, restaurant)
    end

    puts 'Done Downloading Data From Zomato...'
  end

  private
  def create_restaurant(conn, r)
    rest = r['restaurant']
    restaurant = Restaurant.create!(name: rest['name'],
                                    cuisine: rest['cuisines'].split(',').first,
                                    rating: 0,
                                    accepts_ten_bis: (rand() * 10).to_i < 5,
                                    location_latitude: rest.dig('location', 'latitude'),
                                    location_longitude: rest.dig('location', 'longitude'),
                                    max_delivery_time: 10 + 5 * (rand() * 5).to_i)
    add_reviews(conn, restaurant, rest['id'])
  end

  def fetch_restaurants_list(conn, number_of_restaurants = 2, city_id = 280)
    conn.get '/api/v2.1/search', entity_id: city_id, entity_type: 'city', count: number_of_restaurants
  end

  def fetch_reviews(conn, restaurant_id, number_of_reviews = 5)
    conn.get '/api/v2.1/reviews', res_id: restaurant_id, count: number_of_reviews
  end

  def prepare_connection
    Faraday.new(url: 'https://developers.zomato.com') do |c|
      c.headers['Content-Type'] = 'application/json'
      c.headers['user-key'] = '93ecdd326b480c1ae89a0fff0fd21489'
      c.use Faraday::Adapter::NetHttp # perform requests with Net::HTTP
    end
  end

  def add_reviews(conn, restaurant, restaurant_id, number_of_reviews = 5)
    response = fetch_reviews(conn, restaurant_id, number_of_reviews)

    repo_info = JSON.parse response.body

    repo_info['user_reviews'].each do |review|
      create_review(review, restaurant)
    end
  end

  def create_review(r, restaurant)
    review = r['review']
    Review.create!(reviewer_name: review.dig('user', 'name'),
                   rating: five_stars_to_three_stars(review['rating']),
                   comment: review['review_text'],
                   restaurant: restaurant)
  end

  def five_stars_to_three_stars(five_stars_rating)
    (five_stars_rating * (3.0 / 5.0)).to_i
  end
end
