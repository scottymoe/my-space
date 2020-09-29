class Api::ProfilesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.discover(current_user.friend_profiles)
  end

  def update
    current_user.friend_profiles << params[:id].to_i
    current_user.save
  end
end
