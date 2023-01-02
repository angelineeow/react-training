import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import { getTodos, addTodo, removeTodo, editTodo } from "../../apis/TodoApis";

import "./TodoList.css"

class TodoList extends React.Component{
    state = {
        todos: [],
        inputText: ""
    };

    handleInputChange = (e) => {
        this.setState({
            inputText: e.target.value,
        })
    };

    handleSubmit = (e) => {
        e.preventDefault(); //prevent refresh of the page
        if(this.state.inputText.trim() === ""){
            return;
        } else {
            const newTodo = {
                title: this.state.inputText,
                isEdit: false,
                completed: false,
            };

            addTodo(newTodo).then((todo) => {
                this.setState({
                    // setState: make sure we want to create new obj in react and not just mutate
                    todos: [...this.state.todos, todo],
                    inputText: "",
                });
              });
        }
    };

    handleDelete = (id) => {
        removeTodo(id).then(() => {
          this.setState({
            todos: this.state.todos.filter((todo) => id !== todo.id),
          });
        });
      };

    handleEdit = (id, title, isEdit, completed) => {
        editTodo(id, title, isEdit, completed).then(() => {
            this.setState({
                todos: this.state.todos.map((todo) => {
                    return +id === +todo.id ? { ...todo, title, isEdit, completed} : todo;
                })
            })
        })
    }

    /*
        virtual DOM: object
        DOM(document object model): object

        diffing algorithm:

        jsx is a syntax sugar for React.createElement()

        virtual dom/node: console.log("jsx", <div>123</div>);
        dom node: console.log("js", React.createElement("div", null, "123"));

        dom node: children
        dom: tree, root parent

        console.log("root", document.querySelectorAll("#root")) // shows all the node
    
        state:
        [
            {},
            {},
            {}
        ]

        lifecycle:
        1. change of state or props
        2. trigger the render cycle, shouldComponentUpdate, render, componentDidUpdate
        3. render method create new virtual dom object using the new state or props
        4. old virtual dom, diffing algorithm, compare old virtual dom with new virtual dom
        5. update the real dom more efficiently, reconciliation
        6. componentDidUpdate

        setState update batching
        setState async
    */

    render(){
        return (
        <section className="todolist">
            <header className="todolist__header">
                <h4>Todo List</h4>
            </header>
            <form className="todolist__form">
                <input 
                type="text" 
                className="todolist__input" 
                onChange={this.handleInputChange}
                value={this.state.inputText}/>
                <button className="btn btn--primary" onClick={this.handleSubmit}>submit</button>
            </form>

            <ul>
            {
                this.state.todos.map((todo) =>
                <TodoItem key={todo.id} todo={todo} onEdit={this.handleEdit} onDelete={this.handleDelete}/>)
            }
            </ul>

        </section>
    )}

    componentDidMount() {
        getTodos().then((data) => {
        console.log(data);
        this.setState({
            todos: data,
        });
      });
    }
}

export default TodoList;