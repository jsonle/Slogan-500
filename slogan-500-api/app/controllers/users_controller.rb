class UsersController < ApplicationController
    def create
         
    end
    def index
        users = User.all 
        render json: users, include: [:scores]
    end 
    def show 
     user = User.find(params[:id])
     render json: user, include: [:scores]
    end
end
