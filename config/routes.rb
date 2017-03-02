module ActionDispatch
  module Routing
    # Mapper class
    class Mapper
      def draw(routes_name)
        file = File.read(Rails.root.join("config/routes/#{routes_name}.rb"))
        instance_eval(file)
      end
    end
  end
end

Rails.application.routes.draw do
  devise_for :users

  namespace :apis, defaults: { format: :json } do
    draw :version_1 ###### API Version 1
  end

  # Any other routes are handled here
  # (as ActionDispatch prevents RoutingError from hitting
  # ApplicationController::rescue_action).
  match '*path', to: 'application#routing_error', via: :all
end
