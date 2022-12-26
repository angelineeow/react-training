import React from "react";

class Child extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0,
        };
        console.log("Child constructor");
      }
    
      static getDerivedStateFromProps(props, state){
        console.log("Child getDerivedStateFromProps");
      }
    
      componentDidMount(){
        console.log("Child componentDidMount");
      }

      componentDidUpdate(){
        console.log("Child componentDidUpdate");
      }

      componentWillUnmount(){
        console.log("Child componentWillUnmount");
      }

      shouldComponentUpdate(){
        console.log("Child shouldComponentUpdate");
        return true;
      }

      handleClick = () => {
          this.setState({
              count: this.state.count + 1,
          });
      }
    
      render(){
        console.log("Child render");
        return (<>
            <h2>Counter: {this.state.count}</h2>
            <button onClick={this.handleClick}>Child</button>
        </>)
      }
}

export default Child;