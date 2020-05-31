import React, { Component } from 'react';
class   ToDoItemView extends Component {     
     shouldComponentUpdate(nextProps,nextState)
     {
          //return nextProps.toDoItem !== this.props.toDoItem; 
          return true
     }
     render(){
          return(
            <li key = {this.props.toDoItem.id} >
            <input className="todo" type="checkbox" 
            checked ={this.props.toDoItem.isChecked} 
            disabled={this.props.toDoItem.isCompleted} 
            onChange ={() => this.props.onCheckToDoItem(this.props.toDoItem.id)}/>
            <span>{this.props.toDoItem.name}</span>
            <button className="delete" onClick= {() =>this.props.onDeleteToDoItem(this.props.toDoItem.id)}>x</button>
           </li>
           
          )
     }
}
export default ToDoItemView;