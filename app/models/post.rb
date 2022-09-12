class Post < ApplicationRecord
  has_many :post_likes
  belongs_to :user
  belongs_to :category
end
