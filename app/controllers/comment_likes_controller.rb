class CommentLikesController < ApplicationController
  def show
    render json: CommentLike.find(params[:id])
  end

  def create
    render json: CommentLike.create!(comment_like_params)
  end

  def destroy
    if @current_user == CommentLike.find(params[:id]).user
      render json: CommentLike.destroy!(params[:id])
    else
      render json: { error: 'Not your comment like.' }, status: :unauthorized
    end
  end

  private

  def comment_like_params
    params.require(:comment_like).permit(:user_id, :comment_id)
  end
end
