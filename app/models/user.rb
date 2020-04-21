class User < ApplicationRecord
  has_secure_password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

  validates :email, presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX }
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :bio, length: { maximum: 300 }

  has_many :posts
end
