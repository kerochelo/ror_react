import React from "react"

function Todo(props){
  return(
    <tr>
      <td>{props.data.title}</td>
      <td>{props.data.body}</td>
    </tr>
  );
}

class ListForm extends React.Component{
  constructor(props){
    super(props);
    this.hundleSubmit = this.hundleSubmit.bind(this);
  }

  hundleSubmit(e){
    const title = this.refs.title.value;
    const body = this.refs.body.value;
    if(!title){return;}
    this.props.onTodoSubmit({title: title, body: body});
    this.refs.title.value = '';
    this.refs.body.value = '';
    return;
  }

  render(){
    return(
      <div className="col-4">
        <form className="form__Box" onSubmit={this.hundleSubmit}>
          <div className="form-group">
            Todo <input type="text" ref="title" className="form-control" />
          </div>
          <div className="form-group">
            Detail <input type="text" ref="body" className="form-control" />
          </div>
          <div className="form-group">
            <input type="submit" value="Post" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}


class TodoLists extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="list__Box col-8">
        <h1>TodoLists</h1>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Todo</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {this.props.lists.map(list => {
              return(
                <Todo data={list} key={list.id} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default class ListBox extends React.Component{
  constructor(props){
    super(props);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
    this.state = ({
      lists: []
    });
  }

  componentDidMount(){
    this.loadListsFromServer();
  }

  loadListsFromServer(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(result){
        this.setState({
          lists: result.data
        });
      }.bind(this),
      error: function(xhr, status, errors){
        console.error(this.props.url, status, errors.toString());
      }.bind(this)
    })
  }

  handleTodoSubmit(todos){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: todos,
      success: function(data){
        this.setState({
          lists: this.state.lists.concat([data])
        });
      }.bind(this),
      error: function(xhr, status, errors){
        console.error(this.props.url, status, errors.toString());
      }.bind(this)
    })
  }

  render () {
    return (
      <div className="row">
        <TodoLists lists={this.state.lists} />
        <ListForm onTodoSubmit={this.handleTodoSubmit}/>
      </div>
    );
  }
}