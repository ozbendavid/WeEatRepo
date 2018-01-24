Rails.application.routes.draw do
  get 'main_app', to: 'main_app#index'
  resources :reviews
  root 'restaurants#index', as: 'restaurant_index'
  resources :restaurants

  post 'restaurants/load_data', to: 'restaurants#load_data'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
