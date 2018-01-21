class ZomatoDataGenerator
  def self.download_zomato_data(reader)
    restaurants = reader.fetch_restaurants_list
    restaurants.each do |restaurant|
      restaurant_reviews = reader.fetch_reviews_list(restaurant[:id])
      create_restaurant(restaurant, restaurant_reviews)
    end
    end

  private

  def self.create_restaurant(restaurant_information, reviews)
    restaurant = Restaurant.create!(restaurant_information)
    add_reviews(reviews, restaurant)
  end

  def self.add_reviews(reviews, restaurant)
    reviews.each { |review_information| create_review(review_information, restaurant) }
  end

  def self.create_review(review_information, restaurant)
    review_information[:restaurant] = restaurant
    Review.create!(review_information)
  end
end
