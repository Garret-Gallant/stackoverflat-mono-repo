class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end

  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    render json: User.update!(params[:id], user_params)
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
