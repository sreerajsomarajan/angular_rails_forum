#
# To handle all common methods for APIs
#
# @author [DevSree]
#
module ApiConcern
  extend ActiveSupport::Concern

  # Common response for API requests.
  def common_response(message, opt = {})
    status_code = opt.delete(:status)
    status = fetch_status(status_code)
    res = {
      success: @success, # Defined in the BaseApisController
      message: (message.is_a?(Array) ? message.first : message),
      status_code: @code
    }
    res = res.merge!(opt) if opt.present? && @success
    render json: res, status: status
  end

  # Method to fetch status
  def fetch_status(status_code = nil)
    error_array = [400, 401, 422]
    if status_code.present?
      status_code
    elsif error_array.include?(@code)
      @code
    else
      :ok
    end
  end

  # Method to set error status
  def set_error(status, obj = {})
    @success = false
    @code = STATUS_CODE[status]
    return API_ACTION_FAILED unless obj.present?
    obj.errors.full_messages
  end

  # Method to set success status
  def set_success(msg, status = nil)
    @success = true
    @code = STATUS_CODE[status] || STATUS_CODE[:ok]
    msg
  end
end
