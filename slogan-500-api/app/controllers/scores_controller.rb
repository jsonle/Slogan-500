class ScoresController < ApplicationController
    def index 
        scores = Score.all
        render json: scores, include: [:user]
    end
    
    def create
        score = Score.create(total_points: params[:total_points], user_id: params[:user_id])
        render json: score, include: [:user]
    end

    def show
        sorted_scores = Score.all.sort_by {|score| score.total_points}.reverse
        scores = sorted_scores[0..9]
        render json: scores, include: [:user]
    end
end
