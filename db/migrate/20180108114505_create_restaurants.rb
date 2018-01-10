class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisine
      t.decimal :rating, default: 0
      t.boolean :accepts_10bis, default: false
      t.decimal :location_latitude, precision: 15, scale: 10
      t.decimal :location_longitude, precision: 15, scale: 10
      t.integer :max_delivery_time

      t.timestamps
    end
  end
end
