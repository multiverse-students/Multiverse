Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    resources :posts
    resources :registrations, only: [:create]

    scope :auth do
      post '/login', to: 'sessions#login'
    end
  end

  get '*path', to: 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
