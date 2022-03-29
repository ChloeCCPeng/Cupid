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
  
    get '/user' do
      '<h2>Hello <em>World</em>!</h2>'
    end

  end
