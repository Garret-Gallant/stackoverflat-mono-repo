require 'uri'

class User < ApplicationRecord
  has_secure_password

  has_many :post_likes
  has_many :comment_likes
  has_many :posts
  has_many :comments, through: :posts

  before_save :downcase_email
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true, presence: true

  private

  def downcase_email
    self.email = email.downcase.squish
  end
end
