import React from "react"

export default class UserForm extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <form type="post" action="/users" id="user">
        <div className="form-group">
          <label id="email">メールアドレス</label>
          <input id="email" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label id="password">パスワード</label>
          <input id="password" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label id="password_confirmation">パスワード(確認用)</label>
          <input id="password_confirmation" type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">save</button>
      </form>
    );
  }
}