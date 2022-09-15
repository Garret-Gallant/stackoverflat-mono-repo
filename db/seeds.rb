puts "Seeding Data..."

def random_user
  User.all.sample.id
end

def random_quote
  random_array = 
  [
    Faker::TvShows::BrooklynNineNine.quote, Faker::TvShows::RickAndMorty.quote, Faker::TvShows::AquaTeenHungerForce.quote,
    Faker::TvShows::SouthPark.quote, Faker::TvShows::Simpsons.quote, Faker::TvShows::SiliconValley.quote,
    Faker::TvShows::BigBangTheory.quote, Faker::TvShows::BojackHorseman.quote,"Garret didn't think this one would show up"
  ]
  random_array.sample
end

def random_category
  Category.all.sample.id
end

def random_post
  Post.all.sample.id
end

def random_comment
  Comment.all.sample.id
end

puts "Creating users"
def create_users(name)
  User.create(email: Faker::Internet.email, username: name + rand(1000).to_s,
  password: Faker::Internet.password)
end

puts "Creating categories"
def create_categories(name)
  Category.create(name: name)
end

puts "Creating posts"
def create_posts
  Post.create(title: Faker::Book.title, body: random_quote, user_id: random_user,
  category_id: random_category)
end

puts "Creating comments"
def create_comments
  Comment.create(body: random_quote, user_id: random_user, post_id: random_post)
end

puts "Creating likes..."
def create_post_like
  PostLike.create(user_id: random_user, post_id: random_post)
end

def create_comment_like
  CommentLike.create(user_id: random_user, comment_id: random_comment)
end

puts "Randomizing database values..."
3.times do |i|
  create_users(Faker::TvShows::RickAndMorty.character.gsub(/\s+/, ""))
  create_users(Faker::TvShows::TheFreshPrinceOfBelAir.character.gsub(/\s+/, ""))
  create_users(Faker::TvShows::BrooklynNineNine.character.gsub(/\s+/, ""))
  create_users(Faker::TvShows::FamilyGuy.character.gsub(/\s+/, ""))
end

4.times do |i|
  create_categories(Faker::ProgrammingLanguage.name)
  create_categories(Faker::Science.element)
  create_categories(Faker::Nation.nationality)
  create_categories(Faker::Game.title)
end

20.times do |i|
  create_posts()
end

12.times do |i|
  create_comments()
end

40.times do |i|
  create_post_like()
end

40.times do |i|
  create_comment_like()
end

# Create test admin
puts "Creating Admin"
admin = User.create(email: "admin@localhost", username: "admin", password: "password", is_admin: true)
# create admin post
Post.create(title: "Stackoverflat is officially live!", body: "admin", user_id: admin.id, category_id: random_category,
  admin: true)

puts "Done!"
