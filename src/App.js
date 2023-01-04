import logo from './logo.svg';
import './App.css';
// we must have to import this useState from react library
import React, { useState } from 'react';
import Forms from './Forms'

// hooks are used to use the state and lifeCyclce method inside the functional components
// useEffect hook is used to use the LifeCycle method inside the functional components 
// useEffect alone act as three lifeCycle methods 1) ComponentDidMount 2) ComponentWillUmmount 3) ComponentDidUpdate 
// When this method is called it will render three time at the time of all these three methods
function App() {
  return (
    <div>
      <Forms />
    </div>
  );
}

export default App;
