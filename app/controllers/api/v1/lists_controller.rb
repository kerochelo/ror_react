class Api::V1::ListsController < ApplicationController
  def index
    @lists = List.all
  end

  def create
    @list = List.create(list_param)
    render :show, status: :created
  end

  private

  def list_param
    params.permit(:title, :body)
  end
end
