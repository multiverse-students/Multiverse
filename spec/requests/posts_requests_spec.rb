# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Posts' do
  describe 'POST /posts' do
    context 'JSON' do
      let(:format) { :json }
      let(:params) do
        {
          post: {
            title: Faker::DcComics.title,
            content: Faker::Lorem.paragraph
          }
        }.merge(format: format)
      end


      context 'With valid params' do
        it 'responds with status code 201' do
          post posts_path, params: params

          expect(response).to have_http_status(201)
        end

        it 'creates a post' do
          expect { post posts_path, params: params }.to change(Post, :count)
        end
      end

      context 'With invalid params' do
        before do
          params[:post][:title] = ''

          post posts_path, params: params
        end

        it 'responds with status code 422' do
          expect(response).to have_http_status(422)
        end

        it 'returns error messages' do
          expect(response.parsed_body.empty?).to be_falsey
        end
      end
    end
  end
end
