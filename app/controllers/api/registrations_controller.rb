class Api::RegistrationsController < ApplicationController
  
  include CurrentUserConcern
  def create
    p params
    user = User.new(user_params)

    if user.save
      render json: {
        user: user
      },
      status: 201
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end

  private

  def user_params
    params.require(:registration).permit(:email, :first_name, :last_name, :password, :password_confirmation, :bio)
  end
end