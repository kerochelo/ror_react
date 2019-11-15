import React from "react"

/*
export default class Room extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        {this.props.messages.map((msg, idx) => {
          return(
            <p key={idx}>
              {msg.content}
            </p>
          );
        })}
      </div>
    );
  }
}
*/

function GoMessage(props){
  return(
    <div className="go_message">
      <div className="send_message">
        <p>{props.data.content}</p>
      </div>
    </div>
  );
}

class InputArea extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const content = this.refs.content.value;
    if(!content){return;}
    this.props.handleUpdateMessage({content: content});
    this.refs.content.value = '';
    return;
  }

  render(){
    return(
      <div className="type_msg">
        <div className="input_msg_write">
          <input
            type="text"
            className="write_msg"
            ref="content"
          />
          <button
            className="msg_send_btn"
            type="button"
            onClick={this.handleClick}
          >
            <i
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    );
  }
}

function InboxMessages(props){
  return(
    <div className="messages">
      <div className="message_history">
        {props.messages.map((message, id) => {
          return(
            <GoMessage data={message} key={id} />
          );
        })}
        <InputArea handleUpdateMessage={props.handleUpdateMessage} />
      </div>
    </div>
  );
}

export default class Room extends React.Component{
  constructor(props){
    super(props);
    this.state = (
      {messageList: []}
    );
    this.handleUpdateMessage = this.handleUpdateMessage.bind(this);
    // 初期情報の入れ方長考
    this.state.messageList = this.props.messages.map((item) => {
      return(item);
    });
  }

  componentDidMount(){
    this.setupMessage();
  }

  handleUpdateMessage(message){
    this.setState({
      messageList: this.state.messageList.concat({content: message.content})
    });
  }

  setupMessage(){
    App.cable.subscriptions.create(
      'RoomsChannel',
      {
        received(message){
          return this.handleUpdateMessage(message);
        }
      }
    )
  }

  render(){
    return(
      <div className="messaging">
        <div className="inbox_msg">
          <InboxMessages
            messages={this.state.messageList}
            handleUpdateMessage={this.handleUpdateMessage}
          />
        </div>
      </div>
    );
  }
}