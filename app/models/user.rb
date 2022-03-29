class User < ActiveRecord::Base

    #password setup
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true

    #this user can have many liked users
    has_many :liked_users, foreign_key: :liker_id, class_name: "Match"
    has_many :liked, through: :liked_users
    
    #this users can also like many users
    has_many :liking_users, foreign_key: :liked_id, class_name: "Match"
    has_many :likers, through: :liking_users

    def update_user
        
    end
end