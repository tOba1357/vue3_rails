class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: 201
    else
      render json: user.errors.full_messages, status: 400
    end
  end

  private
    def user_params
      params.require(:user).permit(:name)
    end
end
