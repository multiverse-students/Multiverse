class Api::UsersController < ApplicationController
  before_action :authorize_request

  def show
    begin
      @user = User.find(params[:id])
      render json: {user: @user.attributes.except('password_digest')}, status: 200
    rescue
      render json: {errors: [t('users.not_found')]}, status: 404
    end
  end

end