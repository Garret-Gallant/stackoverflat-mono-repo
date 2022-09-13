class PostLikesController < ApplicationController
  def show
    render json: PostLike.find(params[:id])
  end

  def create
    render json: PostLike.create!(post_like_params)
  end

  def destroy
    if @current_user == PostLike.find(params[:id]).user
      render json: PostLike.destroy!(params[:id])
    else
      render json: { error: 'Not your post like.' }, status: :unauthorized
    end
  end

  private

  def post_like_params
    params.require(:post_like).permit(:user_id, :post_id)
  end
end
