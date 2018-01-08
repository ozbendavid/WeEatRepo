class Review < ApplicationRecord
  belongs_to :restaurant

  validates :reviewer_name,
            :rating,
            :comment,
            presence: true
end
