import React, { useState } from 'react';
import { ToDoHeader, ToDoItem, ToDoAdd } from 'components';
import './ToDoList.css';

const ToDoList = () => {
  const [todoItems, setTodoItems] = useState([]);

  const handleAdd = item => setTodoItems(prev => [item, ...prev]);
  const handleDelete = time =>
    setTodoItems(prev => prev.filter(item => item.time.toISOString() !== time.toISOString()));

  return (
    <>
      <ToDoHeader />
      <section className="todo-container">
        <ToDoAdd onAdd={handleAdd} />
        <ul>
          {todoItems.map((el, i) => (
            <ToDoItem name={el.name} key={i} time={el.time} onDelete={handleDelete} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default ToDoList;
