Rails.application.routes.draw do
  resources :reviews
  root 'restaurants#index', as: 'restaurant_index'
  resources :restaurants
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
