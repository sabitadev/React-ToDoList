import React, { Component } from 'react';
import ToDoItemContext from './ToDoItemContext'
class ToDoItemTextBox extends Component {
    constructor()
    {
        super()
        this.state = {
                      value:''
                     }    
    }
  
    onWriteTextBox(e) {
      this.setState({ value: e.target.value })
    }
    onEnterTextBox(e)
    {
      if (e.key === 'Enter') {
        this.context.onAddToDoItem(e.target.value)
        e.target.value =''
      }
    }
    render()
    {
      const styles = {
        textsize : {
            width: '50%'
        }
    };
      return(
        
          <input style= {styles.textsize}
          value={this.value}
          onKeyDown= {this.onEnterTextBox.bind(this)} 
          onChange={this.onWriteTextBox.bind(this)} />
      )    
    }
  }
ToDoItemTextBox.contextType =  ToDoItemContext 
export default ToDoItemTextBox;