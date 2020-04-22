class Api::PostsController < ApplicationController
  before_action :authorize_request
  before_action :find_post, only: [:update, :destroy, :show]

  include Includable

  def index
    @posts = Post.all
    authorize @posts
    
    render json: @posts, include: include(params[:include]), status: 200
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    authorize @post
    
    if @post.save!
      render json: {post: @post, author: @post.user}, status: 201
    end
  end

  def show
    authorize @post
    render json: @post, status: 200
  end

  def update
    authorize @post

    if @post.update!(post_params)
      render json: @post, status: 200
    end
  end

  def destroy
    authorize @post

    if @post.destroy
      render json: {data: 'success'}, status: 200
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
