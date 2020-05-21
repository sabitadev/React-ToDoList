import React from 'react';

var ToDoItemView = function(props) {
     return(
            <li key = {props.id} >
            <input className="todo" type="checkbox" checked ={props.isChecked} disabled={props.isDisabled}  onChange ={props.itemCheckBoxHandler}/>
            <span>{props.name}</span>
            <button className="delete" onClick= {props.deleteItemHandler}>x</button>
            </li>
           
     )
}
export default ToDoItemView;