import logo from './logo.svg';
import './App.css';
// we must have to import this useState from react library
import React, { useState } from 'react';

function App() {
  // will then make array of two values one for accessing the state and other is method to update the state 
  // Initialize with some meaning full value
  let [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Hello from Ayaan : {count}</h1>
      <button onClick={() => {
        setCount(++count)
      }}>
        Increment
      </button>

      <br></br>
      
      <button onClick={() => {
        setCount(--count)
      }}>
        Decrement
      </button>
    </div>
  );
}

export default App;
