import './App.css';
import React from "react";
import Counter from "./component/Counter";
import Header from './component/Header';

// class component
// props drilling, state lifting
// contextAPI, redux
// controlled component: control by React
// uncontrolled: controlled by your browser
 
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "my counter app",
      heading: "Heading",
      counter: 0,
      inputValue: "hello",
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
        const newState = {...prevState};
        newState.counter = newState.counter + 1;
        return newState;
    });
  };

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState((prev) => {
      return {
        ...prev,
        inputValue:e.target.value,
      }
    })
  }

  render(){
    return (
      <>
        <Header heading={this.state.heading} counter={this.state.counter}/>
        <Counter 
          title={this.state.title} 
          counter={this.state.counter} 
          clickHandler={this.state.handleClick}
        />
        <input 
          onChange={this.handleInput} 
          value={this.state.inputValue}>
        </input>
      </>
    )
  }
}

export default App;
