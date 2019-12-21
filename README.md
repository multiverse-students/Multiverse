<p align="center">
  <h1 align="center">Multiverse</h1>
  <p align="center"><strong>From Students to Students</strong></p>
</p>
<br>
<p align="center">
  <a href="https://www.ruby-lang.org/en/">
    <img src="https://img.shields.io/badge/Ruby-v2.6.0-brightgreen.svg" alt="ruby version">
  </a>
  <a href="http://rubyonrails.org/">
    <img src="https://img.shields.io/badge/Rails-v5.1.7-brightgreen.svg" alt="rails version">
  </a>
</p>

Welcome to the [Multiverse](https://multiverse-students.herokuapp.com/) codebase. We are so excited to have you.
With your help, we can build out Multiverse to be more stable and better for our
community.

## What is multiverse?

[Multiverse](https://multiverse-students.herokuapp.com/) is a platform where [Microvese](https://www.microverse.org/) students and software developers
write articles, take part in discussions, and build their student profiles.
We value supportive and constructive dialogue in the pursuit of great code and
career growth for all members. The ecosystem spans from beginner to advanced
developers, and all are welcome to find their place within our community. ❤️

## Table of Contents

- [Contributing](#contributing)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation Documentation](#installation-documentation)

## Contributing

We encourage you to contribute to dev.to! Please check out the
[Contributing to multiverse guide](CONTRIBUTING.md) for guidelines about how to
proceed.

## Getting Started

This section provides a high-level quick start guide. If you're looking for the
installation guide, you'll want to refer to
our complete Developer Documentation.

We run on a [Rails](https://rubyonrails.org/) backend, and we are running a [React](https://reactjs.org/) frontend.

A more complete overview of our stack is available in
our docs.

### Prerequisites

- [Ruby](https://www.ruby-lang.org/en/): we recommend using
  [rbenv](https://github.com/rbenv/rbenv) to install the Ruby version listed on
  the badge.
- [Yarn](https://yarnpkg.com/): please refer to their
  [installation guide](https://yarnpkg.com/en/docs/install).
- [PostgreSQL](https://www.postgresql.org/) 9.4 or higher.
- [Redis](https://redis.io/)

### Installation Documentation

1. Fork our repo from https://github.com/EmirVatric/Multiverse.
2. In the console, download a copy of your forked repo with `git clone https://github.com/your_username/Multiverse.git` where `your_username` is your GitHub username.
3. Enter the new **multiverse** directory with `cd multiverse`.
4. Steps to install gems:
    * You may need to first run `bundle install` if you have older gems in your environment from previous Rails work. If you get an error message like `Your Ruby version is 2.x.x, but your Gemfile specified 2.4.4` then you need to install the ruby version 2.6.0 using `rvm` or `rbenv`.
	    * Using **rvm**: `rvm install 2.6.0` followed by `rvm use 2.6.0`
	    * Using **rbenv**:  `rbenv install 2.6.0` followed by `rbenv local 2.6.0`
    * Install gems with `bundle install --without production` from the rails root folder, to install the gems you'll need, excluding those needed only in production.
7. Run `rails db:create` followed by `rails db:migrate` to set up the database
8. Install static assets (like external javascript libraries, fonts) with `yarn install`

## Code of Conduct

Please read and abide by our [Code of Conduct](); our community aspires to be a respectful place both during online and in-­person interactions.

<br>

<p align="center">
  <strong>Happy Coding</strong> ❤️
</p>
