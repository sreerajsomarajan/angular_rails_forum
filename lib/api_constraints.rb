#
# ApiConstraints for versioning of APIs
#
# @author [DevSree]
#
class ApiConstraints
  def initialize(options)
    @version = options[:version]
    @default = options[:default] || true
  end

  def matches?(req)
    @default ||
      req.headers['Accept'] == "application/forum.v#{@version}"
  end
end
