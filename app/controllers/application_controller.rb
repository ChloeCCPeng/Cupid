require 'sinatra'
require 'sinatra/cross_origin'

class ApplicationController < Sinatra::Base

  # Need this for CORS
  set :bind, '0.0.0.0'
  configure do
    enable :cross_origin
  end
  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    response.headers['Access-Control-Expose-Headers'] = 'Set-Cookie'
    response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS, PATCH"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token, Set-Cookie, *"
    response.headers["Access-Control-Request-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token, Set-Cookie, *"
    response.headers['Access-Control-Max-Age'] = '86400'

  end

  configure do
    enable :sessions
  end


      # Add this line to set the Content-Type header for all responses
      set :default_content_type, 'application/json'



  get '/matches/' do
    users = Match.all
    users.to_json
  end

  #find matches for specific user
  get '/match/:id' do
    user = User.find_by_id(params[:id])
    all = (user.likers.uniq + user.liked.uniq)
    def duplicate_value(all)
      all.select{|v| all.count(v) > 1}.uniq
    end

    uniq = duplicate_value(all)
    
    uniq.to_json()
    end

  #gets users for specific user
  get '/users/:id' do
    logged_in_user = User.find(params[:id])
    preferenced_users = User.where('preference = ?', logged_in_user.gender).where('gender = ?', logged_in_user.preference)
    filtered_users = preferenced_users.excluding(logged_in_user).excluding(logged_in_user.liked).excluding(logged_in_user.dislikers)
    
    filtered_users.to_json
  end

  #sets like
  post '/like/' do 

    Match.create(liked_id: params[:liked_id], liker_id: params[:liker_id])

    liker = User.find_by_id(params[:liker_id])
    liked = User.find_by_id(params[:liker_id])

    liker.likers.include?(liked).to_json
  end

    #sets dislike
    post '/dislike/' do 
      Dislike.create(disliked_id: params[:not_interested_id], disliker_id: params[:user_id])  
    end

    patch '/user/:id' do 
      user = User.find(params[:id])
      user.update(
        name: params[:name],
        bio: params[:bio],
        hobby: params[:hobby],
        preference: params[:preference],
        age: params[:age],
        picture: params[:picture],
        location: params[:location],
      )
      user.to_json
    end

    post '/users/' do
        user = User.create(
          username: params[:username],
          password: params[:password],
          name: params[:name],
          bio: params[:bio],
          hobby: params[:hobby],
          preference: params[:preference],
          gender: params[:gender],
          age: params[:age].to_i,
          picture: params[:picture],
          location: params[:location],
        )
          user.to_json
      end

      post '/login' do
        @user = User.find_by(:username => params[:username])
        if @user && @user.authenticate(params[:password])
            session[:current_user_id] = @user.id
            response = {response: 'Success', current_user_id: @user.id}
            response.to_json
        else
          response = {response: 'Fail'}
          response.to_json
        end
    end

    get '/profile/:id' do
      profile = User.find_by_id(params[:id])
      profile.to_json
    end

    post '/logout' do
        @@user_id = nil
    end

    # get '/current-user/' do
    #     puts @@user_id
    # end

    get '/users/' do
        if defined?(@@user_id)
            logged_in_user = User.find(@@user_id)
            all_users = User.all
            liked = logged_in_user.liked
            filtered_users = all_users.select do |user|
                user != logged_in_user || !liked.include?(user)
            end
            filtered_users.to_json(include: [:likers, :liked])
        end
      end

      get '/user/:id' do
        user = User.find(params[:id])
        user.to_json(include: [:likers, :liked])
      end


    #update user info
    patch '/user/:id' do
        user = User.find(params[:id])
        user.update(
        name: params[:name],
        bio: params[:bio],
        hobby: params[:hobby],
        preference: params[:preference],
        age: params[:age],
        picture: params[:picture],
        location: params[:location]
        )
    user.to_json
  end
  
  # delete user
  delete '/users/:id' do
    user = User.find(params[:id])
    user.destroy
    user.to_json
  end

  # Need this for CORS
  options "*" do
    response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS, PATCH"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token, Set-Cookie, *"
    response.headers["Access-Control-Request-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token, Set-Cookie, *"
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    response.headers['Access-Control-Expose-Headers'] = 'Set-Cookie'
    response.headers['Access-Control-Max-Age'] = '86400'


    200
  end

end
