class CreateDislikes < ActiveRecord::Migration[6.1]
  def change
    create_table :dislikes do |t|
      t.integer :disliked_id 
      t.integer :disliker_id
    end 
  end
end
