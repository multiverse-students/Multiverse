class Api::RegistrationsController < ApplicationController
  include CurrentUserConcern
  def create
    user = User.new(user_params)

    if user.save
      render json: {
        status: :created,
        user: user
      }
    else
      render json: { status: :unprocessable_entity, errors: user.errors.full_messages }
    end
  end

  private

  def user_params
    params.require(:registration).permit(:email, :first_name, :last_name, :password, :password_confirmation, :bio)
  end
end