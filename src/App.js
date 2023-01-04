import './App.css';
import React from 'react';
import Forms from './Components/Forms';

export class App extends React.Component {
  render(){
    console.warn("Render")
    return (
      <div className="App">
        <Forms />
      </div>
    );
  
  }
}

export default App;
