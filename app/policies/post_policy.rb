class PostPolicy < ApplicationPolicy
  def create?
    user.present?
  end
end
