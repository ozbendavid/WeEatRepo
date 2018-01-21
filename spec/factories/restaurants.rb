require 'faker'

FactoryBot.define do
  factory :restaurant do
    name "#{Faker::Name.first_name}\'s place"
    cuisine 'some cuisine'
    location_latitude 0.0
    location_longitude 0.0
    max_delivery_time 30
    accepts_ten_bis false
    rating 0
  end

  factory :italian_restaurant, parent: :restaurant do
    cuisine 'Italian'
  end

  factory :ten_bis_restaurant, parent: :restaurant do
    accepts_ten_bis true
  end
end
