import React from 'react';
import './App.css';
import ToDoListView from './ToDoListView'

function App() {
  return (
    <div className="toDoApp">
      <header className="appHeader">
       To Do List App
       </header>            
               <ToDoListView></ToDoListView> 
    </div>
  );
}

export default App;

