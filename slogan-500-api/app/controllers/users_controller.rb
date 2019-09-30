class UsersController < ApplicationController
    def create
         
    end
    def index
        users = User.all 
        render json: users, include: [:scores]
    end 
end
