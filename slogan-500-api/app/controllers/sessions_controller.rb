class SessionsController < ApplicationController

    # def index
    #     user = User.find_by(params[:user][:username])
    #     render json: user
    # end
    
    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    def destroy
        session.delete(:user_id)
    end

end