Rails.application.routes.draw do
  get 'home/index'
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  get 'locations/get_location'
  get 'locations/find_address'
  root to: "home#index"

end
