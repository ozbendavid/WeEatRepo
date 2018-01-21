require 'faraday_middleware'

class ZomatoDataReader

  def initialize
    @connection = Faraday.new(url: ENV['ZOMATO_URL']) do |c|
      c.request :json
      c.headers['user-key'] = ENV['ZOMATO_API_KEY']
      c.adapter Faraday.default_adapter
    end
  end

  def fetch_restaurants_list(number_of_restaurants = 2, city_id = 280)
    response = get_restaurants(number_of_restaurants, city_id)
    restaurants_info = JSON.parse(response.body)['restaurants']
    restaurants_info.map {|r| r['restaurant']}
        .map {|restaurant|
          {id: restaurant['id'],
           name: restaurant['name'],
           cuisine: restaurant['cuisines'].split(',').first,
           rating: 0,
           accepts_ten_bis: (rand * 10).to_i < 5,
           location_latitude: restaurant.dig('location', 'latitude'),
           location_longitude: restaurant.dig('location', 'longitude'),
           max_delivery_time: 10 + 5 * (rand * 5).to_i}}
  end

  def fetch_reviews_list(restaurant_id, number_of_reviews = 5)
    response = get_reviews(restaurant_id, number_of_reviews)
    reviews_info = JSON.parse(response.body)['user_reviews']
    reviews_info.map {|r| r['review']}
        .map {|review|
          {
              reviewer_name: review.dig('user', 'name'),
              rating: five_stars_to_three_stars(review['rating']),
              comment: review['review_text'],
          }}
  end

  private

  def get_restaurants(number_of_restaurants, city_id)
    @connection.get '/api/v2.1/search', entity_id: city_id, entity_type: 'city', count: number_of_restaurants
  end

  def get_reviews(restaurant_id, number_of_reviews)
    @connection.get '/api/v2.1/reviews', res_id: restaurant_id, count: number_of_reviews
  end

  def five_stars_to_three_stars(five_stars_rating)
    (five_stars_rating * (3.0 / 5.0)).to_i
  end
end