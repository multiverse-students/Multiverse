class PostSerializer < ActiveModel::Serializer
  cache key: 'post', expires_in: 3.hours
  attributes :id, :title, :content

  belongs_to :user
  has_many :comments
end
