Rails.application.routes.draw do
    resources :budgets 
    resources :categories
  

  devise_for :users, path: '/', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  }, 
  controllers: { 
    sessions: 'users/sessions',
    registrations: 'users/registrations', 
    omniauth_callbacks: "callbacks" }
end
