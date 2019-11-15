Rails.application.routes.draw do
  root 'lists#index'
  resources :rooms, only: %i[index]
  resources :users, only: %i[new create show]
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :lists, only: %i[index create]
    end
  end
  mount ActionCable.server => '/cable'
end
