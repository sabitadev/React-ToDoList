import React , { useContext } from 'react';
import ToDoItemContext from './ToDoItemContext'
var ToDoActionView = function(props) {
     const context = useContext(ToDoItemContext);
     return(
            <div className="column left">
                <button className="button" onClick={context.onDeleteManyItems}>Remove Items</button>
                <button className="button" onClick={context.onCheckAllItems}>Select All Items</button>
                <button className="button" onClick={context.onCompleteManyItems}>Complete Items</button>
            </div>      
     )
}
export default  ToDoActionView;


            