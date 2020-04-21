class Api::UsersController < ApplicationController
  before_action :authorize_request

  def show
    @user = User.find(params[:id])
    render json: {user: @user.attributes.except('password_digest')}, status: 200
  end

  def me
    render json: {user: @current_user.attributes.except('password_digest')}, status: 200
  end

  def update
    user = User.find(params[:id])
    authorize user
    
    if user.update(user_params)
      render json: {user: user.attributes.except('password_digest')}, status: 200
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :bio)
  end

end