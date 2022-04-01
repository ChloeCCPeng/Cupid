User.destroy_all
Match.destroy_all

puts "Creating users..."
300.times do
    User.create(username: Faker::Artist.name, password: Faker::Artist.name, gender: Faker::Gender.binary_type, name: Faker::FunnyName.name, bio: Faker::Quote.matz, hobby: Faker::Hobby.activity, preference: Faker::Gender.binary_type, age: rand(19..40), picture: Faker::LoremFlickr.image, location: Faker::Address.state)
end

User.create(username: "Evan", password: "snickers", gender: "Male", name: "Evan", bio: "Hello World", hobby: "Skiing", preference: "Female", age: 26, picture: "https://evanchernicky.com/wp-content/uploads/2021/06/evan-logo-transparent.png", location: "DC")


puts "Creating matches..."
500.times do
    Match.create(liked_id: User.ids.sample, liker_id: User.ids.sample)
end

puts "Seeding done!"
