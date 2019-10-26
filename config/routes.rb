Rails.application.routes.draw do
  root 'lists#index'
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :lists, only: %i[index create]
    end
  end
end
