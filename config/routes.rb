Rails.application.routes.draw do
  resources :comment_likes, only: %i[show create destroy]
  resources :comments, only: %i[show create update]
  resources :post_likes, only: %i[show create destroy]
  resources :posts, only: %i[index show create update]
  resources :categories, only: %i[index show]
  resources :users, only: %i[index show create update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/me', to: 'users#show'
  get '/me/posts', to: 'users#show_posts'
  get '/me/comments', to: 'users#show_comments'
  get '/me/comment_likes', to: 'users#show_comment_likes'
  get '/me/post_likes', to: 'users#show_post_likes'
  get '/admin_posts', to: 'posts#admin_posts'
  post '/post_likes', to: 'post_likes#create'
  post '/signup', to: 'users#create'
  post '/post', to: 'posts#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
