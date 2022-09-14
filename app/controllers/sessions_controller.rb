class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  # Check if session already exists/Create session
  def create
    if logged_in?
      render json: { error: 'Already logged in.' }, status: 418
    else
      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    end
  end

  def logged_in?
    !!session[:user_id]
  end

  def destroy
    session.delete :user_id
    head :no_content
  end
end
