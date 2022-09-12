class CommentsController < ApplicationController
  def show
    render json: Comment.find(params[:id])
  end

  def create
    render json: Comment.create!(comment_params)
  end

  def update
    render json: Comment.update!(params[:id], comment_params)
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :post_id, :body)
  end
end
