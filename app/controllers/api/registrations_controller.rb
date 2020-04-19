class Api::RegistrationsController < ApplicationController
  def create
    user = User.new(user_params)

    if user.save
      token = JsonWebToken.encode(user_id: user.id)
      render json: { access_token: token, token_type: "Bearer", user: user.attributes.except('password_digest') }, status: 201
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end

  private

  def user_params
    params.require(:registration).permit(:email, :first_name, :last_name, :password, :password_confirmation, :bio)
  end
end