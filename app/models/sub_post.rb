#
# Model SubPost
#
# @author [DevSree]
#
class SubPost < ApplicationRecord
  belongs_to :main_post
  belongs_to :user
end
