ENV["RACK_ENV"] ||= "development"

require 'bundler/setup'
Bundler.require(:default, ENV["RACK_ENV"])

# Without this code, ActiveRecord thinks the singular of "Freebies" is "Freeby"
# https://api.rubyonrails.org/classes/ActiveSupport/Inflector/Inflections.html#method-i-irregular
ActiveSupport::Inflector.inflections(:en) do |inflect|
  inflect.irregular 'freebie', 'freebies'
end

require_all 'app/models'
