class Api::UsersController < ApplicationController
  before_action :authorize_request

  def show
    @user = User.find(params[:id])
    render json: @user, status: 200
  end

  def me
    @user = @current_user
    render json: @user, status: 200
  end

  def update
    @user = User.find(params[:id])
    authorize @user
    
    if @user.update!(user_params)
      render json: @user, status: 200
    end
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :bio)
  end

end