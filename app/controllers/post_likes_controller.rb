class PostLikesController < ApplicationController
  def show
    render json: PostLike.find(params[:id])
  end

  def create
    render json: PostLike.create!(post_like_params)
  end

  def destroy
    render json: PostLike.destroy!(params[:id])
  end

  private

  def post_like_params
    params.require(:post_like).permit(:user_id, :post_id)
  end
end
