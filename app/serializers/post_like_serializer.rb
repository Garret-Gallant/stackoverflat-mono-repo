class PostLikeSerializer < ActiveModel::Serializer
  attributes :id, :total_likes
  has_one :user
  has_one :post
end
