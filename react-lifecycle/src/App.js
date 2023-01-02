import './App.css';
import React from 'react'
import Child from './component/Child';
import Child2 from './component/Child2';

// virtual dom
// reconcilation, diffing algorithm

class App extends React.Component {
  constructor(){
    super();
    console.log("App constructor");
    this.state = {
      hide: false,
    };
  }

  static getDerivedStateFromProps(props, state){
    console.log("App getDerivedStateFromProps");
  }

  componentDidMount(){
    console.log("App componentDidMount");
    // works because we has access to the realDOM, component is ready in realDOM
    // console.log(document.getElementById("root"));
    // console.log(document.getElementById("heading"));
  }

  componentDidUpdate(){
    console.log("App componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("App componentWillUnmount");
  }

  shouldComponentUpdate(){
    console.log("Child shouldComponentUpdate");
    return true;
  }

  handleHide = () => {
    this.setState({
      hide: true,
    });
  }

  // handleTimeChange = () => {
  //   this.setState({
  //     time: this.state.time + 100,
  //   })
  // }

  // every time we call render(), react create element on virtual DOM
  render(){
    console.log("App render");
    // console.log(document.getElementById("root"));
    // console.log(document.getElementById("heading")); // null cause we have no access to the real DOM yet
    return (
    <>
      <h1 id="heading"> App </h1>
      {!this.state.hide && (<Child />)}
      <Child2 />
      <button onClick={this.handleHide}> Hide </button>
    </>
    );
  }
}

export default App;
