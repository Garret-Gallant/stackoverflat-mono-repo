class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    render json: User.all
  end

  def show
    render json: @current_user
  end

  def show_posts
    render json: @current_user.posts
  end

  def show_comments
    render json: @current_user.comments
  end

  def show_comment_likes
    render json: @current_user.comment_likes.map(&:comment)
  end

  def show_post_likes
    render json: @current_user.post_likes.map(&:post)
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :email, :password, :password_confirmation)
  end
end
