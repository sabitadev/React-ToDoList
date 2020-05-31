import React , {Component} from 'react';
import './App.css';
import ToDoListView from './ToDoListView'
import ToDoItemTextBox from './ToDoItemTextBox'
import ToDoActionView from './ToDoActionView'
import ToDoItemModel from './ToDoItemModel'


class App extends Component{
 
  render(){
      return(
          <>
           <header className="appHeader">
            To Do List App
           </header>           
            <ToDoItemModel>
              <ToDoActionView/>
              <div className="container">
              <ToDoItemTextBox/>
              <ToDoListView/>
              </div> 
            </ToDoItemModel > 
         </>           
      )
  }
}

export default App;

