import React, { Component } from 'react';

class ToDoItemInputTextBox extends Component {
    constructor()
    {
        super()
        this.state = {
                      value:''
                     }    
    }
    handleChangeToDoItemText(e) {
      this.setState({ value: e.target.value })
    }
    render()
    {
      return(
        <div >
          <input className="itemTextInput" value={this.value} onKeyDown={this.props.keyPressToDoItemText} onChange={this.handleChangeToDoItemText.bind(this)} />
        </div>
       )
    }
  }
export default  ToDoItemText;