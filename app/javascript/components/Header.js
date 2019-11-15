import React, {Fragment} from "react"


function NavItem(){
  return(
    <li className="nav-item">
      <a className="nav-link" href="/users/new">create account</a>
    </li>
  );
}

function DropDownListItem(){
  return(
    <a
      className="dropdown-item"
      href="/rooms"
    >
      chat
    </a>
  );
}

function DropDownList(){
  return(
    <li>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        mini app
      </a>
      <div
        className="dropdown-menu"
        aria-labelledby="navbarDropdown"
      >
        <DropDownListItem />
      </div>
    </li>
  );
}

function OtherLinks(){
  return(
    <ul className="navbar-nav mr-auto">
      <NavItem />
      <DropDownList />
    </ul>
  );
}

function TopLink(props){
  return(
    <Fragment>
      <a className="navbar-brand" href={props.path}>Todo</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <OtherLinks />
      </div>
    </Fragment>
  );
}

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <TopLink path={this.props.path} />
      </nav>
    );
  }
}