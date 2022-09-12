# Categories for posts

class CategoriesController < ApplicationController
  def index
    render json: Category.all
  end

  def show
    render json: Category.find(params[:id])
  end
end
