class PostsController < ApplicationController
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
        render json: Post.update!(params[:id], post_params)
    end

    private

    def post_params
        params.require(:post).permit(:user_id, :title, :body, :category_id)
    end
    
end
