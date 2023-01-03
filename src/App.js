import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './User'

export class App extends React.Component {
  constructor() {
    super()
    this.state = {
      toggle: true
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React : Component Will Unmount </h1>
        {/* this means if toggle is true then show the user component else show nothing  */}
        {
          this.state.toggle ? 
          <User />:null
        }
        <button onClick={()=>{
          this.setState({toggle:!this.state.toggle})
        }}>
          Toggle
          </button>
      </div>
    );

  }
}

export default App;
