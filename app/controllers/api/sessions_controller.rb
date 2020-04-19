class Api::SessionsController < ApplicationController
  def login
    @user = User.find_by_email(params[:email])
    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      render json: { access_token: token, token_type: "Bearer", user: @user.attributes.except('password_digest') }, status: 200
    else
      render json: { errors: [t('authentication.error')] }, status: 401
    end
  end

  private

  def login_params
    params.permit(:email, :password)
  end
end