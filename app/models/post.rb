class Post < ApplicationRecord
  validates :title, presence: true, length: { minimun: 5, maximum: 200 }
  validates :content, presence: true, length: { minimun: 100, maximum: 1200 }
end
