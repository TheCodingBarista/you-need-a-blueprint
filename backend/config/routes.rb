Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  resources :budgets do
    resources :categories
  end
  root 'categories#index'
end
