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

    enable :sessions


      # Add this line to set the Content-Type header for all responses
      set :default_content_type, 'application/json'



  get '/matches/' do
    users = Match.all
    users.to_json
  end

  get '/user/:id' do
    user = User.find(params[:id])
    user.to_json

    post '/users/' do
      # binding.pry
        user = User.create(
          username: params[:username],
          password: params[:password],
          name: params[:name],
          bio: params[:bio],
          hobby: params[:hobby],
          preference: params[:preference],
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
            response = {response: 'Success'}
            response.to_json
        else
          response = {response: 'Fail'}
          response.to_json
        end
    end

    get '/profile/' do
      binding.pry
      profile = User.find_by_id(session[:current_user_id])
      profile.to_json
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

  get '/match/:id' do
      match = Match.find(params[:id])
      match.to_json
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

  # delete matches
  delete '/matches/:id' do
      match = Match.find(params[:id])
      match.destroy
      match.to_json
  end

end
