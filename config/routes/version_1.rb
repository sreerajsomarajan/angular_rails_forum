scope module: :v1, constraints: ApiConstraints.new(version: 1) do
  devise_scope :user do
    post '/login'      => 'sessions#create'
    delete '/logout'   => 'sessions#destroy'
  end

  resources :users
  resources :posts
end
