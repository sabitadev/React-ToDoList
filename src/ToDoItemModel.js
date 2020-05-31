import React , {Component} from 'react'
import ToDoItemContext from './ToDoItemContext'
class ToDoItemModel extends Component{
    constructor()
    {
        super()
        this.state = {
                    toDoItemArr : [{id:1, name:"Read javascript" ,isChecked:false ,isCompleted:false} ,
                    {id:2, name:"Test innovationmotor",isChecked:false ,isCompleted:false} ,
                    {id:3, name:"Cook Food",isChecked:false ,isCompleted:false}],
                    } 
           
    }

    onAddToDoItem (toDoItemInputText){
        var id = 1
        var toDoItemArr = this.state.toDoItemArr.slice();
        if(toDoItemArr.length> 0){
           id = parseInt(toDoItemArr[toDoItemArr.length-1].id)+1
        }
  
        var toDoItem = {id :id.toString() ,name:toDoItemInputText,isChecked:false ,isCompleted:false}
        toDoItemArr.push(toDoItem)
        this.setState({ toDoItemArr : toDoItemArr})
      } 
    onDeleteToDoItem(id){  
          var toDoItemArr = this.state.toDoItemArr.slice();   
          var toDoItem = toDoItemArr.find(item => item.id === id)
          var index = toDoItemArr.indexOf(toDoItem)
          toDoItemArr.splice(index ,1)
          this.setState({toDoItemArr : toDoItemArr})     

      }
    onCheckToDoItem(id)
      {
          var toDoItemArr = this.state.toDoItemArr.slice();
          var toDoItem =  toDoItemArr.find(item => item.id === id)
          var index =  toDoItemArr.indexOf(toDoItem)
          toDoItemArr[index].isChecked = !toDoItemArr[index].isChecked
          this.setState({toDoItemArr : toDoItemArr})   
    } 
    onDeleteManyItems()
    {
        var unchecekedToDoItems = this.state.toDoItemArr.filter(item => !item.isChecked);
        this.setState({toDoItemArr : unchecekedToDoItems})  
    }
    onCheckAllItems()
    {
        var toDoItemArr = this.state.toDoItemArr.slice()
        toDoItemArr.forEach(function(item){
            item.isChecked = true;
        })
        this.setState({toDoItemArr : toDoItemArr})  
    }
    onCompleteManyItems()
    {
        var toDoItemArr = this.state.toDoItemArr.slice()
        toDoItemArr.forEach(function(item){
            if(item.isChecked === true)
            {
                item.isCompleted = true;
            }
        })
        this.setState({toDoItemArr : toDoItemArr})  
  
    }
    render() {
        return (
            <ToDoItemContext.Provider value = {{ toDoItemArr : this.state.toDoItemArr,
                onAddToDoItem : this.onAddToDoItem.bind(this),
                onDeleteToDoItem : this.onDeleteToDoItem.bind(this),
                onCheckToDoItem : this.onCheckToDoItem.bind(this),
                onDeleteManyItems : this.onDeleteManyItems.bind(this),
                onCheckAllItems : this.onCheckAllItems.bind(this),
                onCompleteManyItems : this.onCompleteManyItems.bind(this)}}> {this.props.children}
            </ToDoItemContext.Provider>
           
        );
    }
}  

export default ToDoItemModel;