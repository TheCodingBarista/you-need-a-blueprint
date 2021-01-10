Rails.application.routes.draw do
    resources :budgets do
      resources :categories
  end

  devise_for :users, path: '/', path_names: {
    sign_in: 'login',
    sign_out: 'logout'
    #registration: 'signup'
  }, 
  controllers: { 
    sessions: 'users/sessions',
    registrations: 'users/registrations', 
    omniauth_callbacks: "callbacks" }
  root to: "categories#index"
end
