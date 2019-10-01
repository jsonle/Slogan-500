class CompaniesController < ApplicationController
    def index
        companies = Company.all
        render json: companies
    end 
    def show
        companyround = Company.all.sample(4)
        render json: companyround
    end

end
