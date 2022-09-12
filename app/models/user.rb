class User < ApplicationRecord
  has_many :post_likes
  has_many :comment_likes
  has_many :posts
  has_many :comments, through: :posts
end
