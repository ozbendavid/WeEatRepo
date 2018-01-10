class Review < ApplicationRecord
  belongs_to :restaurant

  validates :reviewer_name,
            :rating,
            :comment,
            presence: true

  validates :rating, numericality: {greater_than_or_equal_to: 0, less_than_or_equal_to: 3}

  after_save :update_restaurant_rating
  after_destroy :update_restaurant_rating

  private

      def update_restaurant_rating
        restaurant.update_rating
      end
end
