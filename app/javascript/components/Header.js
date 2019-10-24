import React from "react"
import PropTypes from "prop-types"

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href={this.props.path}>Todo</a>
      </nav>
    );
  }
}

export default Header
