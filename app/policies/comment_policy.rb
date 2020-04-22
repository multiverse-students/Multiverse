class CommentPolicy < ApplicationPolicy
  def create?
    user.present?
  end

  def update?
    user == record.user
  end
end
