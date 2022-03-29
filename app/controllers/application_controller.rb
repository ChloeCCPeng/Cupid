class ApplicationController < Sinatra::Base

      # Add this line to set the Content-Type header for all responses
      set :default_content_type, 'application/json'

  get '/users/' do
    users = User.all
    users.to_json(include: [:likers, :liked])

  end

  get '/matches/' do
    users = Match.all
    users.to_json

  end

    get '/user/:id' do
      user = User.find(params[:id])
      user.to_json

    end
  
    get '/match/:id' do
        match = Match.find(params[:id])
        match.to_json
    end

    get '/unmatched/' do
        users = User.all
        filtered_users = users.filter do |user|
            User.contain(user)
        end
        users.to_json
    
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
            puts 'Success'
            session[:user_id] = user.id
            redirect to '/'
        else
            puts 'Fail'
        end
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

    delete '/users/:id' do
        user = User.find(params[:id])
        user.destroy
        user.to_json
    end

  end
