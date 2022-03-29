class CreateMatches < ActiveRecord::Migration[6.1]
  def change
    create_table :matches do |t|
      t.integer :liked_id 
      t.integer :liker_id 
      t.string :conversation
    end
  end
end
