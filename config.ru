require 'sinatra'

class App < Sinatra::Base

    get '/user/:id' do
      user = User.find(params[:id])
      user.to_json

    end
  
    get '/match/:id' do
        match = Match.find(params[:id])
        match.to_json
    end
  
    # get '/user' do
    #   '<h2>Hello <em>World</em>!</h2>'
    # end

  end

run App