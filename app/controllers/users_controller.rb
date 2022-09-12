class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    user = User.find_by(id: session[user_id])
    if user
      render json: User
    else
      render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end

  def create
    render json: User.create!(user_params)
  end

  def update
    render json: User.update!(params[:id], user_params)
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
