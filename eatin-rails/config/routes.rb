Rails.application.routes.draw do
	# scope '/api' do
	#   post 'user_token' => 'user_token#create'
	# end
	resources :users
	post 'authenticate', to: 'authentication#authenticate'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
