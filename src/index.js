import React, { useReducer, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

import { useState } from 'react';
import Todo from './Todo';

function App () {

  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  function addTodo() {
    setTodos((todos)=>[...todos, 'new todo']);
  };

  const incrementCounter = () => {
    setCounter( (preCounter) => preCounter + 1 );
  }

  return (
    <>
      <button onClick={incrementCounter}>Increase counter</button>
      <h1>{counter}</h1>
      <button onClick={addTodo}>Add todo</button>
      <Todo todos={todos} addTodo={addTodo} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />)