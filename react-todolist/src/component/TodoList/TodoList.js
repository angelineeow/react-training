import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import { getTodos, addTodo, removeTodo, saveTodo, completeTodo} from "../../apis/TodoApis";

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

    //request: frontend, backend:JSON server
    //pull a request: getting data from frontend to the backend

    handleSave = (id, title) => {
        saveTodo(id, title).then(() => {
            this.setState({
                todos: this.state.todos.map((todo) => {
                    return +id === +todo.id ? { ...todo, title, isEdit: false} : todo; // overwrite title, isEdit
                })
            })
        }).catch((err) => {
            alert("Error: ", err)
        })
    }

    // local 
    handleEdit = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
            return +id === +todo.id ? { ...todo, isEdit: true} : todo; // overwrite isEdit
        })})
    }

    handleComplete = (id, completed) => {
        completed = !completed;
        completeTodo(id, completed).then(() => {
            this.setState({
                todos: this.state.todos.map((todo) => {
                    return +id === +todo.id ? { ...todo, completed} : todo; // overwrite completed
            })})
        })
    }

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
                <TodoItem key={todo.id} todo={todo} onSave={this.handleSave} onComplete={this.handleComplete} onEdit={this.handleEdit} onDelete={this.handleDelete}/>)
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