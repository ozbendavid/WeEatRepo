class Restaurant < ApplicationRecord
  has_many :reviews, dependent: :destroy

  validates :name,
            :cuisine,
            :location_latitude,
            :location_longitude,
            :max_delivery_time,
            presence: true

  validates :rating, numericality: {greater_than_or_equal_to: 0, less_than_or_equal_to: 3}

  after_initialize :update_defaults

  def update_rating
    average_rating = reviews.average(:rating) || 0
    update(rating: average_rating)
  end

  private

  def update_defaults
    @rating ||= 0
  end
end
