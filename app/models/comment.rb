class Comment < ApplicationRecord
  has_many :comment_likes, dependent: :destroy
  has_many :comments, dependent: :destroy
  belongs_to :user
  belongs_to :post
end
