import React from "react";

// class component
class Counter extends React.Component {
    // state = {counter: 0, title: "counter"};
    // state is maintained in the component
    // props is passed from other component
    // constructor(props) {
    //     super(props); // pass "props" so that we can access it in the constructor()
    //     this.state = {
    //         counter: 0,
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick(){
    //     this.setState({
    //         counter: this.state.counter + 1,
    //     });
    // } // this is coming from where it is invoked


    // handleClick = () => {
    //     this.setState((prevState) => {
    //         const newState = {...prevState};
    //         newState.counter = newState.counter + 1;
    //         return newState;
    //     });
    // };

    render(){
        const {title, counter, clickHandler} = this.props
        return (
            <>
            <h1> {title}: {counter} </h1>
            <button onClick={clickHandler}>increment</button>  {/*SyntheticEvent*/}
            </>
        )
    }
}

export default Counter;