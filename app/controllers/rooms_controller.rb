class RoomsController < ApplicationController
  def index
    @messages = Message.all.select('content')
  end
end
