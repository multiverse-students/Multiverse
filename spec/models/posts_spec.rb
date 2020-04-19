# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Post, type: :model do
  before :each do
    @post1 = Post.new(content: 'Content');
    @post2 = Post.new(title: 'Hello');
    @post3 = Post.new(title: 'Hello', content: 'Content');
  end

  it 'Post must have title' do
    expect(@post1).to_not be_valid
  end

  it 'Post must have content' do
    expect(@post2).to_not be_valid
  end

  it 'Post should be valid' do
    expect(@post3).to be_valid
  end

  context 'validate length of title and content of a post' do
    post = Post.new

    it 'is not valid without a title' do
      post.title = nil
      expect(post).not_to be_valid
    end

    it 'is not valid without a content' do
      post.content = nil
      expect(post).not_to be_valid
    end

    it 'is not valid  with a title, shorter than 5 characters' do
      post.title = 'a' * 4
      expect(post).not_to be_valid
    end

    it 'is valid  with a title, 5 characters' do
      post.title = 'a' * 5
      post.content = 'c' * 100
      expect(post).to be_valid
    end

    it 'is not valid  with a title, longer than 200 characters' do
      post.title = 'a' * 201
      expect(post).not_to be_valid
    end

    it 'is not valid  with a content, shorter than 100 characters' do
      post.content = 'a' * 10
      expect(post).not_to be_valid
    end

    it 'is not valid  with a content, longer than 1200 characters' do
      post.content = 'a' * 1250
      expect(post).not_to be_valid
    end

    it 'is valid  with a content, 1200 characters' do
      post.title = 'title'
      post.content = 'a' * 1200
      expect(post).to be_valid
    end
  end
end
