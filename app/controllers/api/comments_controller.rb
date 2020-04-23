class Api::CommentsController < ApplicationController
  before_action :authorize_request
  before_action :find_comment, only: [:update, :destroy, :show]

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

  def show
    authorize @comment
    
    render json: @comment, status: 200
  end

  def update
    authorize @comment

    if @comment.update!(comment_params)
      render json: @comment, status: 200
    end
  end

  def destroy
    authorize @comment

    if @comment.destroy
      render json: {data: 'success'}, status: 200
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end

  def find_comment
    @comment = Comment.find(params[:id])
  end

end