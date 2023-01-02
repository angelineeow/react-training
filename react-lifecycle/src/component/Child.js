import React from "react";

class Child extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            time: new Date().toLocaleTimeString(),
        };
        console.log("Child constructor");
      }
    
      static getDerivedStateFromProps(props, state){
        // console.log("Child getDerivedStateFromProps");
      }
    
      componentDidMount(){
        // console.log("Child componentDidMount");

        this.time = setInterval(() => {
          console.log("time updates")
          this.setState({
            time: new Date().toLocaleTimeString(),
          });
        }, 1000);
      }

      componentDidUpdate(){
        // console.log("Child componentDidUpdate");
      }

      componentWillUnmount(){
        // console.log("Child componentWillUnmount");
        clearInterval(this.time);
      }

      shouldComponentUpdate(){
        // console.log("Child shouldComponentUpdate");
        return true;
      }

      handleClick = () => {
          this.setState({
              count: this.state.count + 1,
          });
      }
    
      render(){
        // console.log("Child render");
        return (<>
            <h2>Counter: {this.state.count}</h2>
            <button onClick={this.handleClick}>Child</button>
            <h2> Time: {this.state.time}</h2>
            {/* <button onClick={this.props.onTimeChange}>update time</button> */}
        </>)
      }
}

export default Child;