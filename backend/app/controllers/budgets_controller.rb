class BudgetsController < ApplicationController
    def index 
        render json: Budget.all
    end
    def show 
        render json: Budget.find(params[:id])
    end
end
