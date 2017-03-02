#
# Model MainPost
#
# @author [DevSree]
#
class MainPost < ApplicationRecord
  belongs_to :user
  has_many :sub_posts, dependent: :destroy

  # Patient JSON
  def post_json
    as_json(include: :sub_posts)
  end
end
