module Error
  class NotAuthorized < CustomError
    def initialize
      super(:not_authorized, 401, 'You are not authorized to preforme this action!')
    end
  end
end