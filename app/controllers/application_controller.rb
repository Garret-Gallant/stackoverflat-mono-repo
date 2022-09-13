# app/controllers/application_controller.rb

# endpoint for main application things
class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end

  private 

  def record_not_found_response(e)
    render json: { error: e }, status: 404
  end

  def record_invalid_response(e)
    render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
  end

end
