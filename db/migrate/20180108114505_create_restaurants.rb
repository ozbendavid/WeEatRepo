class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.integer :cuisine
      t.integer :rating
      t.boolean :accepts_10bis
      t.decimal :location_latitude
      t.decimal :location_longitude
      t.integer :max_delivery_time

      t.timestamps
    end
  end
end
