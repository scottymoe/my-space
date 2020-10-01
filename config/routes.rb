Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :items
    resources :users 
      resources :profiles, only: [:index, :update] do
        resources :posts 
      get "/my_profiles", to: "profiles#my_profiles"
      end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
