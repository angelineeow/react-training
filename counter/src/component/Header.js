import React from "react";

class Header extends React.Component {
  render(){
      return <>
       <h1> {this.props.heading} </h1>
       <h2> {this.props.counter} </h2>
      </>
  }
}

export default Header;