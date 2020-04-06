import React from 'react';

var ToDoItemText = function(props) {
     return(
      <div >
        <input className="itemtextinput" value={props.value} onKeyDown={props.keyPressToDoItemText} onChange={props.handleChangeToDoItemText} />
      </div>
     )
}
export default  ToDoItemText;