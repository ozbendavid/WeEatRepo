require 'rails_helper'

RSpec.describe Restaurant, type: :model do

  context "avarage rating" do

    it "is default 0 after creation" do
      restaurant = FactoryBot.create(:italian_restaurant)
      expect(restaurant.rating).to eq 0
    end

    it "updates after review creation" do
      good_review = FactoryBot.create(:italian_restaurant_good_review)
      expect(good_review.restaurant.rating).to eq good_review.rating
    end

    it "updates after many reviews creation" do
      good_review = FactoryBot.create(:italian_restaurant_good_review)
      restaurant = good_review.restaurant

      reviews = [good_review,
                 FactoryBot.create(:italian_restaurant_moderate_review, restaurant: restaurant),
                 FactoryBot.create(:italian_restaurant_bad_review, restaurant: restaurant),
                 FactoryBot.create(:italian_restaurant_bad_review, restaurant: restaurant)]

      average = reviews.map(&:rating).reduce(:+) / reviews.size.to_f
      expect(restaurant.rating).to eq average
    end

    it "updates after reviews are updated" do
      good_review = FactoryBot.create(:italian_restaurant_good_review)
      restaurant = good_review.restaurant

      reviews = [good_review,
                 FactoryBot.create(:italian_restaurant_moderate_review, restaurant: restaurant),
                 FactoryBot.create(:italian_restaurant_bad_review, restaurant: restaurant),
                 FactoryBot.create(:italian_restaurant_bad_review, restaurant: restaurant)]
      reviews.last.update(rating: 3)

      average = reviews.map(&:rating).reduce(:+) / reviews.size.to_f
      expect(restaurant.rating).to eq average
    end

    it "updates after reviews are deleted" do

      good_review = FactoryBot.create(:italian_restaurant_good_review)
      restaurant = good_review.restaurant

      reviews = [good_review,
                 FactoryBot.create(:italian_restaurant_moderate_review, restaurant: restaurant),
                 FactoryBot.create(:italian_restaurant_bad_review, restaurant: restaurant),
                 FactoryBot.create(:italian_restaurant_bad_review, restaurant: restaurant)]
      
      average = reviews.map(&:rating).reduce(:+) / reviews.size.to_f
      expect(restaurant.rating).to eq average

      reviews.each(&:destroy)

      expect(restaurant.rating).to eq 0
    end
  end
end
