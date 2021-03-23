Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :decks do 
      resources :cards, only: [:create, :destroy, :show]
    end
  end
end
