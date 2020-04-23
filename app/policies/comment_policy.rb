class CommentPolicy < ApplicationPolicy
  def create?
    user.present?
  end

  def update?
    user == record.user
  end

  def show?
    user.present?
  end

  def destroy?
    user == record.user
  end
end
