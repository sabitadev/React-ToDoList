import React  ,{Component} from 'react';
import ToDoItemView from './ToDoItemView'
import ToDoItemContext from './ToDoItemContext'
class ToDoListView extends Component
{  

    componentDidMount() {
        //Timer for page refresh //http request
    }
    render(){
        return(
            <ToDoItemContext.Consumer>
            {(context) => (
                 <React.Fragment>
                    <ul>
                    {context.toDoItemArr.map((toDoItem ,index) => (
                    <ToDoItemView 
                    key = {toDoItem.id}
                    toDoItem = {toDoItem}
                    onCheckToDoItem = {context.onCheckToDoItem}
                    onDeleteToDoItem = {context.onDeleteToDoItem}
                    />  
                    ))}  
                    </ul> 
                 </React.Fragment>
            )}
            </ToDoItemContext.Consumer>
                
        )
    }

}

export default ToDoListView;
