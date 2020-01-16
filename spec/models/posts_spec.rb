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
end
