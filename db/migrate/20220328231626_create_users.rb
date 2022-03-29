class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
    t.string :name
    t.string :bio
    t.string :hobby
    t.string :preference
    t.integer :age
    t.string :picture
    t.string :location
    end
  end
end
