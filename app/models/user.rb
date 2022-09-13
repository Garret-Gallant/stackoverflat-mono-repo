require 'uri'

class User < ApplicationRecord
  has_many :post_likes
  has_many :comment_likes
  has_many :posts
  has_many :comments, through: :posts
  has_secure_password
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true, presence: true
  validates :username, presence: true, uniqueness: true
  before_save :downcase_email

  private

  def downcase_email
    self.email = email.downcase.squish
  end
end
