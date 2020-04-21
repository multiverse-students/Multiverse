class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  include Error::ErrorHandler
  include Pundit
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  def current_user
    @current_user
  end

  private
 
    def user_not_authorized
      render json: {errors: 'You are not authorized to preforme this action!'}, status: 401
    end

    def authorize_request
      header = request.headers['Authorization']
      header = header.split(' ').last if header
      begin
        @decoded = JsonWebToken.decode(header)
        @current_user = User.find(@decoded[:user_id])
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: 401
      rescue JWT::DecodeError => e
        render json: { errors: t('authentication.error') }, status: 401
      end
    end
end
