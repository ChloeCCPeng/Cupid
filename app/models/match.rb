class Match < ActiveRecord::Base
    #this user can have many liked users
    belongs_to :liker, class_name: "User"
    belongs_to :liked, class_name: "User"

    def delete_match
        
    end
end