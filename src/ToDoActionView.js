import React from 'react';

var ToDoActionView = function(props) {

     return(
            <div className="column left">
                <button className="removeItem Button" onClick={props.removeSelectedHandler}>Remove Item</button>
                <button className="selectAll Button" onClick={props.selectAllHandler}>Select All Items</button>
                <button className="markCompleted Button" onClick={props.markCompleteHandler}>Complete Item</button>
            </div>      
     )
}
export default  ToDoActionView;


            