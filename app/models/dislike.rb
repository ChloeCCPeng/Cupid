class Dislike < ActiveRecord::Base
    #this user can have many liked users
    belongs_to :disliker, class_name: "User"
    belongs_to :disliked, class_name: "User"

        
end