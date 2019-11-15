class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "rooms_channel"
  end

  def unsubscribed
  end

  def speak(data)
    # データを登録取得し登録したデータを返す
    ActionCable.server.broadcast 'rooms_channel', content: data['content']
  end
end
