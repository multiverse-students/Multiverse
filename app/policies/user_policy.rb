class UserPolicy < ApplicationPolicy
  def show?
    record.present?
  end
  def update?
    user == record
  end
end