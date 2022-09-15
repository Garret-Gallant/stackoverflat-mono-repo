class PostsController < ApplicationController
  skip_before_action :authorize, only: %w[index show]
  def index
    render json: Post.all
  end

  def show
    render json: Post.find(params[:id])
  end

  def create
    render json: Post.create!(post_params)
  end

  def update
    post = Post.find(params[:id])
    if @current_user == post.user
      render json: Post.update!(params[:id], post_params), status: :ok
    else
      render json: { error: 'Not your post.' }, status: :unauthorized
    end
  end

  def admin_posts
    posts = Post.where(admin: true)
    if posts.empty?
      render json: :no_content
    else
      render json: posts
    end
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :title, :body, :category_id)
  end
end
