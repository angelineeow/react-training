import React from "react";

import "./TodoItem.css"

class TodoItem extends React.Component{
    render(){
        let {id, title, isEdit, completed} = this.props.todo;
        let {onDelete, onEdit} = this.props;
            if(isEdit && !completed) {
                // isEdit: true && completed: false (editing task)

                return (<li className="todoitem">
                    <input 
                        type="text" 
                        value={title}
                        onChange= {(e) => {
                            onEdit(id, e.target.value)
                        }}>
                    </input>
                    <button 
                        className="btn btn--edit" 
                        onClick={(e) => {
                            isEdit = false;
                            onEdit(id, title, isEdit)
                        }}>edit</button>
                    <button className="btn btn--delete" onClick={() => onDelete(id)}>delete</button>
                </li>
            
            )} else if (!isEdit && completed) {
                // isEdit: false && completed: true (completed task)
                
                return (<li className="todoitem">
                    {/* check if completed is true or false */}
                    <span 
                        onClick={() => {
                            completed = false;
                            onEdit(id, title, isEdit, completed)
                        }} 
                        style={{textDecoration: "line-through"}}>
                            {title}
                    </span>
                </li>
            
            )} else {
                // isEdit: false && completed: false (just pending task)
                return (<li className="todoitem">
                    <span onClick={() => {
                            completed = true;
                            onEdit(id, title, isEdit, completed)
                    }}>{title}</span>
                    <button className="btn btn--edit" onClick={() => {
                            isEdit = true;
                            onEdit(id, title, isEdit)
                    }}>edit</button>
                    <button className="btn btn--delete" onClick={() => onDelete(id)}>delete</button>
                </li>
                
            )}
    }
}

// id, title, completed, delete button

export default TodoItem;