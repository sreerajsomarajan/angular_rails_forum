module Apis
  module V1
    #
    # Base Controller for v1 APIs
    #
    # @author [DevSree]
    #
    class BaseApiController < ApplicationController
      include ApiConcern

      # acts_as_token_authentication_handler_for User, except: [:routing_error]

      before_action :initialize_default_instance_vars

      private

      # To initialize the default intance vars
      def initialize_default_instance_vars
        @success = true
        @code = STATUS_CODE[:ok]
      end
    end
  end
end
