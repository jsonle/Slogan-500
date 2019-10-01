Rails.application.routes.draw do
  resources :companies
  resources :scores
  resources :users
  resources :sessions, only: [:index, :create]
  match '/logout', to: 'sessions#destroy', via: :delete
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
