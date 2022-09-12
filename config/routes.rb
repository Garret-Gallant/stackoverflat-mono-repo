Rails.application.routes.draw do
  resources :comment_likes
  resources :comments
  resources :post_likes
  resources :posts
  resources :categories
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
end
