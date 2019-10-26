import React, {Fragment} from "react"


function NavItem(){
  return(
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
  );
}

function DropDownListItem(){
  return(
    <a
      class="dropdown-item"
      href="#"
    >
      jintori
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <OtherLinks />
      </div>
    </Fragment>
  );
}

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <TopLink path={this.props.path} />
        <OtherLinks />
      </nav>
    );
  }
}

export default Header
