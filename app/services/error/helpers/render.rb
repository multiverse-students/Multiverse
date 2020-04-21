module Error::Helpers
  class Render
    def self.json(_error, _message)
      {
        error: _error,
        message: _message
      }.as_json
    end
  end
end