Rails.application.routes.draw do
  resources :lists
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :lists
    end
  end
end
