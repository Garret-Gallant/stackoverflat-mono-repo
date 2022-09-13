class CommentLikesController < ApplicationController
  def show
    render json: CommentLike.find(params[:id])
  end

  def create
    render json: CommentLike.create!autoload(comment_like_params)
  end

  def destroy
    render json: CommentLike.destroy!(params[:id])
  end

  private

  def comment_like_params
    params.require(:comment_like).permit(:user_id, :comment_id)
  end
end
