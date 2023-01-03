import React from "react";

import "./TodoItem.css"

class TodoItem extends React.Component{

    //local state
    state = {
        value: this.props.todo.title
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    render(){
        const {id, title, isEdit, completed} = this.props.todo;
        const {onDelete, onEdit, onSave, onComplete} = this.props;

        return (
            <li className="todoitem">
              {completed ? <span onClick={() => onComplete(id, completed)} style={{ textDecoration: "line-through" }}> {title} </span> : (
                <>
                  {isEdit ? <input type="text" value={this.state.value} onChange={this.handleChange}/> : <span onClick={() => onComplete(id, completed)}>{title}</span>}
                  {isEdit ? <button className="btn btn--save" onClick={() => onSave(id, this.state.value)}>save</button>:<button className="btn btn--edit" onClick={()=>onEdit(id)}>edit</button>}
                  <button className="btn btn--delete" onClick={() => onDelete(id)}>delete</button>
                </>
              )}
            </li>
        );
    }
}

// id, title, completed, delete button

export default TodoItem;