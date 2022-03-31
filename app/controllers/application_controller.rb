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
  end


      # Add this line to set the Content-Type header for all responses
      set :default_content_type, 'application/json'



  get '/matches/' do
    users = Match.all
    users.to_json
  end

  get '/match/:id' do
    match = Match.find(params[:id])
    match.to_json
    end

  get '/user/:id' do
    user = User.find(params[:id])
    user.to_json
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
        users = User.create(
          name: params[:name],
          bio: params[:bio],
          hobby: params[:hobby],
          preference: params[:preference],
          age: params[:age],
          picture: params[:picture],
          location: params[:location],
        )
        users.to_json
      end

      post '/login' do
        user = User.find_by(:username => params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            @@user_id = session[:user_id]
            response = {response: 'Success'}
            response.to_json
        else
          response = {response: 'Fail'}
          response.to_json
        end
    end

    post '/logout' do
        @@user_id = nil
    end

    get '/current-user/' do
        puts @@user_id
    end

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
    response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    200
  end

end
