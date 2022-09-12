# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Data..."

# Create test users
u1 = User.create(username: Faker::Cannabis.unique.strain, password: Faker::Lorem.unique, email: "#{Faker::name.first_name}.#{Faker::name.last_name}@faker.com", is_admin: true) 
u2 = User.create(username: Faker::Cannabis.unique.strain, password: Faker::Lorem.unique, email: "#{Faker::name.first_name}.#{Faker::name.last_name}@faker.com", is_admin: false)
u3 = User.create(username: Faker::Cannabis.unique.strain, password: Faker::Lorem.unique, email: "#{Faker::name.first_name}.#{Faker::name.last_name}@faker.com", is_admin: false)
u4 = User.create(username: Faker::Cannabis.unique.strain, password: Faker::Lorem.unique, email: "#{Faker::name.first_name}.#{Faker::name.last_name}@faker.com", is_admin: false)
u5 = User.create(username: Faker::Cannabis.unique.strain, password: Faker::Lorem.unique, email: "#{Faker::name.first_name}.#{Faker::name.last_name}@faker.com", is_admin: false)

# Create test posts
p1 = Post.create(title: Faker::Lorem.unique.sentence, body: Faker::Lorem.unique.paragraph, user_id: u1.id)
p2 = Post.create(title: Faker::Lorem.unique.sentence, body: Faker::Lorem.unique.paragraph, user_id: u2.id)
p3 = Post.create(title: Faker::Lorem.unique.sentence, body: Faker::Lorem.unique.paragraph, user_id: u3.id)
p4 = Post.create(title: Faker::Lorem.unique.sentence, body: Faker::Lorem.unique.paragraph, user_id: u4.id)
p5 = Post.create(title: Faker::Lorem.unique.sentence, body: Faker::Lorem.unique.paragraph, user_id: u5.id)

# Create test comments
c1 = Comment.create(body: Faker::Lorem.unique.paragraph, user_id: u1.id, post_id: p1.id)
c2 = Comment.create(body: Faker::Lorem.unique.paragraph, user_id: u2.id, post_id: p2.id)
c3 = Comment.create(body: Faker::Lorem.unique.paragraph, user_id: u3.id, post_id: p3.id)
c4 = Comment.create(body: Faker::Lorem.unique.paragraph, user_id: u4.id, post_id: p4.id)
c5 = Comment.create(body: Faker::Lorem.unique.paragraph, user_id: u5.id, post_id: p5.id)
c6 = Comment.create(body: Faker::Lorem.unique.paragraph, user_id: u1.id, post_id: p2.id)
c7 = Comment.create(body: Faker::Lorem.unique.paragraph, user_id: u2.id, post_id: p3.id)
c8 = Comment.create(body: Faker::Lorem.unique.paragraph, user_id: u3.id, post_id: p4.id)
c9 = Comment.create(body: Faker::Lorem.unique.paragraph, user_id: u4.id, post_id: p5.id)
c10 = Comment.create(body: Faker::Lorem.unique.paragraph, user_id: u5.id, post_id: p1.id)

# Create test post likes
pl1 = PostLike.create(user_id: u1.id, post_id: p1.id)
pl2 = PostLike.create(user_id: u2.id, post_id: p2.id)
pl3 = PostLike.create(user_id: u3.id, post_id: p3.id)
pl4 = PostLike.create(user_id: u3.id, post_id: p3.id)
pl5 = PostLike.create(user_id: u3.id, post_id: p3.id)

# Create test comment likes
cl1 = CommentLike.create(user_id: u1.id, comment_id: c1.id)
cl2 = CommentLike.create(user_id: u2.id, comment_id: c2.id)
cl3 = CommentLike.create(user_id: u3.id, comment_id: c3.id)
cl4 = CommentLike.create(user_id: u3.id, comment_id: c3.id)
cl5 = CommentLike.create(user_id: u3.id, comment_id: c3.id)

puts "Done!"