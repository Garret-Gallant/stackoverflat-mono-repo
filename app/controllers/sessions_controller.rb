class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  #Check if session already exists
  def create
    if session[:user_id]
      render json: { error: 'Already logged in.' }, status: :unauthorized
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

  def destroy
    session.delete :user_id
    head :no_content
  end
end
