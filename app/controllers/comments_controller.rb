class CommentsController < ApplicationController
  def show
    render json: Comment.find(params[:id])
  end

  def create
    render json: Comment.create!(comment_params)
  end

  def update
    comment = Comment.find(params[:id])
    if @current_user == comment.user
      render json: Comment.update!(params[:id], comment_params), status: :ok
    else
      render json: { error: 'Not your comment.' }, status: :unauthorized
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :post_id, :body)
  end
end
