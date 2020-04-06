import React from 'react';
import './App.css';
import ToDoBaseView from './ToDoBaseView'

function App() {
  return (
    <div className="ToDoApp">
      <header className="App-header">
       To Do List App
       </header>            
               <ToDoBaseView></ToDoBaseView> 
    </div>
  );
}

export default App;

