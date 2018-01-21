json.extract! restaurant,
              :id,
              :name,
              :cuisine,
              :rating,
              :accepts_ten_bis,
              :location_latitude,
              :location_longitude,
              :max_delivery_time,
              :created_at,
              :updated_at
json.url restaurant_url(restaurant, format: :json)
