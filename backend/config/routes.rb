Rails.application.routes.draw do
  resources :budgets do
    resources :categories
  end
end
