#
# Model User
#
# @author [DevSree]
#
class User < ApplicationRecord
  acts_as_token_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :main_posts, dependent: :destroy
  has_many :sub_posts, dependent: :destroy
end
