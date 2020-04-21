class Api::PostsController < ApplicationController
  before_action :authorize_request
  before_action :find_post, only: [:edit, :update, :destroy, :show]

  def index
    @posts = Post.all

    render json: { data: @posts},status: 200
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    authorize @post
    
    if @post.save
      render json: {post: @post}, status: 201
    else
      render json: {errors: @post.errors.messages}, status: 422
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: @post }
    end
  end

  def edit
  end

  def update
    if @post.update(post_params)
      respond_to do |format|
        format.html { redirect_to posts_path }
        format.json { render json: @post }
      end
    else
      respond_to do |format|
        format.html { render 'edit' }
        format.json { render json: @post.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_path }
      format.json { head :no_content }
    end
  end

  private

  def post_params
    params.permit(:title, :content)
  end

  def find_post
    @post = Post.find(params[:id])
  end
end
