class Post < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :post_likes, dependent: :destroy
  belongs_to :user
  belongs_to :category
end
