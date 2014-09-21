class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :damaged, :isbn
end
