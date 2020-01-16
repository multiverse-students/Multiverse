# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Create post', type: :feature do
  before :each do
  end

  scenario 'Should create a post and add it to the index' do
    visit new_post_path
    expect(page).to have_content('Create post')
    fill_in('post_title', with: 'My title')
    fill_in('post_content', with: 'My content')
    click_button('commit')
    expect(page).to have_content('My title')
    expect(page).to have_content('My content')
  end
end
