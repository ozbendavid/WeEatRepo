FactoryBot.define do
  factory :review do
    reviewer_name 'Oz'
    comment 'Some comment'
  end

  factory :italian_restaurant_good_review, parent: :review do
    rating '3'
    association :restaurant, factory: :italian_restaurant
  end

  factory :italian_restaurant_moderate_review, parent: :review do
    rating '2'
    association :restaurant, factory: :italian_restaurant
  end

  factory :italian_restaurant_bad_review, parent: :review do
    rating '3'
    association :restaurant, factory: :italian_restaurant
  end

end
