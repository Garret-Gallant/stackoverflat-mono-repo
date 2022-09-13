# Categories for posts
class CategoriesController < ApplicationController
  def index
    render json: Category.all
  end

  def show
    render json: Category.find(params[:id])
  end

  def create
    if @current_user.admin
      render json: Category.create(category_params)
    else
      render json: { error: 'Not an admin.' }, status: :unauthorized
    end
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end
end
