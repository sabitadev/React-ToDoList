import React , { Component } from 'react';
import ToDoItemText from './ToDoItemText';
import ToDoItemListView from './ToDoItemListView';
import ToDoActionView  from './ToDoActionView'

class ToDoBaseView  extends Component {
    
    constructor()
    {
        super()
        this.state = {
                       toDoItemArr : [{id:1, name:"Read javascript" ,isChecked:false ,isDisabled:false} ,
                                      {id:2, name:"Test innovationmotor",isChecked:false ,isDisabled:false} ,
                                      {id:3, name:"Cook Food",isChecked:false ,isDisabled:false}],
                       value:''
                    }    
    }
    componentWillUnmount(){
        
    }
    handleChangeToDoItemText(e) {
        this.setState({ value: e.target.value })
     }
     keyPressToDoItemText(e){
        if(e.keyCode === 13){
           console.log('value', e.target.value)
           this.setState({ value: '' })
           var toDoItemArray = this.state.toDoItemArr.slice();
           var toDoItem = {id :toDoItemArray.length + 1  ,name:e.target.value}
           toDoItemArray.push(toDoItem)
           this.setState({ toDoItemArr : toDoItemArray})
        }
     }
    deleteItemHandler(id)
    {
        var arr = this.state.toDoItemArr.slice();
        arr.splice(id,1);
        this.setState({toDoItemArr : arr})       
    }
    itemCheckBoxHandler(id)
    {
        var toDoItemArr = this.state.toDoItemArr.slice();
        toDoItemArr[id].isChecked = !toDoItemArr[id].isChecked
        this.setState({toDoItemArr : toDoItemArr})   
    }
    removeSelectedHandler()
    {
        var toDoItemArr = this.state.toDoItemArr.slice()
        this.state.toDoItemArr.forEach(function(item){
            var index = toDoItemArr.indexOf(item)
            if(item.isChecked === true)
            {
                toDoItemArr.splice(index,1)
            }
        })
        this.setState({toDoItemArr : toDoItemArr})  
    }
    selectAllHandler()
    {
        var toDoItemArr = this.state.toDoItemArr.slice()
        toDoItemArr.forEach(function(item){
            item.isChecked = true;
        })
        this.setState({toDoItemArr : toDoItemArr})  
    }
    markCompleteHandler()
    {
        var toDoItemArr = this.state.toDoItemArr.slice()
        toDoItemArr.forEach(function(item){
            if(item.isChecked === true)
            {
                item.isDisabled = true;
            }
        })
        this.setState({toDoItemArr : toDoItemArr})  

    }
    
    render(){
        return(
            <div>
                <ToDoItemText 
                    value = {this.state.value} 
                    keyPressToDoItemText = {this.keyPressToDoItemText.bind(this)} 
                    handleChangeToDoItemText = {this.handleChangeToDoItemText.bind(this)}
                />  
            <div id="container">  
                <ToDoActionView
                removeSelectedHandler = {this.removeSelectedHandler.bind(this)}
                selectAllHandler = {this.selectAllHandler.bind(this)}
                markCompleteHandler = {this.markCompleteHandler.bind(this)} />
                <div className="column right">
                    <ul>
                    {this.state.toDoItemArr.map((toDoItem ,index) => (
                       <ToDoItemListView
                       id = {toDoItem.id}
                       name = {toDoItem.name}
                       isChecked = {toDoItem.isChecked}
                       isDisabled = {toDoItem.isDisabled}
                       itemCheckBoxHandler = {this.itemCheckBoxHandler.bind(this,index)}
                       deleteItemHandler= {this.deleteItemHandler.bind(this,index)}
                       /> 
                    ))}  
                    </ul>       
                </div> 
            </div>  
        </div>  
        )
    }
   
}

export default ToDoBaseView