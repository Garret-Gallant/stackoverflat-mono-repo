Rails.application.routes.draw do
  resources :comment_likes, only: [:show, :create, :destroy]
  resources :comments, only: [:show, :create, :update]
  resources :post_likes, only: [:show, :create, :destroy]
  resources :posts, only: [:index, :show, :create, :update]
  resources :categories, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
