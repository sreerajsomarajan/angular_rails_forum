#
# CommonErrors module for APIs
#
# @author [DevSree]
#
module CommonErrors
  extend ActiveSupport::Concern

  # Method to handle routing error
  def routing_error
    raise ActionController::RoutingError.new(params[:path])
  end

  # Method to handle generic exceptions.
  def generic_exception(error)
    render json: {
      success: false,
      message: error.message
    }, status: :internal_server_error
  end

  # Method to handle record not found errors.
  def record_not_found(error)
    render json: {
      success: false,
      message: error.message
    }, status: :not_found
  end

  # Method to handle record not found errors.
  def path_not_found
    render json: {
      success: false,
      message: "No route matches for '#{params[:path]}'."
    }, status: :not_found
  end
end
