class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render json: @user
    else
      render json: @user.errors = ['Invalid Credentials']
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: "No currently logged in user", status: 404
    end
    # redirect_to new_session_url
  end
end
