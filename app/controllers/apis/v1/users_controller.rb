module Apis
  module V1
    #
    # UsersController for user related actions
    #
    # @author [DevSree]
    #
    class UsersController < BaseApiController
      acts_as_token_authentication_handler_for User, except: [:index]
      # Method to render user list
      def index
        render json: User.all
      end
    end
  end
end
