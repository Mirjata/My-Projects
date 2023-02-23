import React from 'react';
import ToDoList from 'screens/TodoList/ToDoList';
import './App.css';

const App = () => (
  // fetch here last to do list from local storage
  // const items = localStorage.getItem('items');

  <main>
    <ToDoList />
  </main>
);

export default App;
