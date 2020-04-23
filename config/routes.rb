Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    resources :posts do
      resources :comments
    end
    resources :registrations, only: [:create]
    resources :users, only: [:show, :update, :destroy]

    get '/me', to: 'users#me'

    scope :auth do
      post '/login', to: 'sessions#login'
    end
  end

  get '*path', to: 'homepage#index'
end
