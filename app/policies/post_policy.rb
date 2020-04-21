class PostPolicy < ApplicationPolicy
  def create?
    user.present?
  end

  def show?
    user.present?
  end

  def index?
    user.present?
  end

  def update?
    user == record.user
  end

  def destroy?
    user == record.user
  end
end
