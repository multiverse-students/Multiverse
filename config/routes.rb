Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    resources :posts
    resources :registrations, only: [:create]
    resources :users, only: [:show, :update, :destroy]

    scope :auth do
      post '/login', to: 'sessions#login'
    end
  end

  get '*path', to: 'homepage#index'
end
