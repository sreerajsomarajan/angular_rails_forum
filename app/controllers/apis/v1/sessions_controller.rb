module Apis
  module V1
    #
    # Controller for Session related actions
    #
    # @author [DevSree]
    #
    class SessionsController < Devise::SessionsController
      include ApiConcern

      acts_as_token_authentication_handler_for User
      skip_before_action :verify_signed_out_user, only: :destroy

      # Sign out
      # DELETE /apis/logout
      def destroy
        msg = if current_user
                current_user.update_attributes(authentication_token: nil)
                set_success('User has successfully signed out')
              else
                set_error(:unprocessable_entity)
              end
        common_response(msg)
      end
    end
  end
end
