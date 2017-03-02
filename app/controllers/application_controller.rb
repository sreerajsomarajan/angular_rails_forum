#
# Application Controller.
#
# @author [DevSree]
#
class ApplicationController < ActionController::API
  include ActionController::MimeResponds
  include CommonErrors

  respond_to :json

  rescue_from Exception, with: :generic_exception
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActionController::RoutingError, with: :path_not_found
end
