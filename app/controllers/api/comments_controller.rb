class Api::CommentsController < ApplicationController
  before_action :authorize_request
  before_action :find_comment, only: [:update, :destroy]

  def create
    post = Post.find(params[:post_id])

    @comment = Comment.new(comment_params)
    @comment.post = post
    @comment.user = @current_user
    authorize @comment

    if @comment.save!
      render json: @comment, status: 201
    end
  end

  def update
    authorize @comment

    if @comment.update!(comment_params)
      render json: @comment, status: 200
    end
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end

  def find_comment
    @comment = Comment.find(params[:id])
  end

end