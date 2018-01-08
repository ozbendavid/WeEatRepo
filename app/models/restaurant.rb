class Restaurant < ApplicationRecord
  has_many :reviews, :dependent => :destroy

  validates :name,
            :cuisine,
            :rating,
            :accepts_10bis,
            :location_latitude,
            :location_longitude,
            :max_delivery_time,
            presence: true
end
