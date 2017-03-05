module Apis
  module V1
    #
    # UsersController for user related actions
    #
    # @author [DevSree]
    #
    class UsersController < BaseApiController
      # acts_as_token_authentication_handler_for User, except: [:index]
      # Method to render user list
      def index
        render json: User.all
      end

      # Method to signup a user.
      def create
        user = User.new(user_params)
        msg = if user.save
                'User has successfully created.'
              else
                set_error(:unprocessable_entity, user)
              end
        common_response(msg, user: user)
      end

      private

      # Method to set user params.
      def user_params
        params.require(:user)
              .permit(:first_name, :last_name, :email, :password, :password_confirmation)
      end
    end
  end
end
