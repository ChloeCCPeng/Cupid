User.destroy_all
Match.destroy_all


puts "Creating users..."
100.times do
    User.create(username: Faker::Artist.name, password: Faker::Artist.name, name: Faker::Name.male_first_name, bio: Faker::Quote.matz, hobby: Faker::Hobby.activity, preference: Faker::Gender.binary_type, age: rand(19..40), picture: "https://nerdiertides.files.wordpress.com/2018/04/id3-hnry-sub-01.png", location: Faker::Address.state)
end

puts "Creating matches..."
100.times do
    Match.create(liked_id: User.ids.sample, liker_id: User.ids.sample)
end

puts "Seeding done!"
