import logo from './logo.svg';
import './App.css';
import React from 'react';

export class App extends React.Component {
  constructor() {
    super()
    this.state = {
      active: null,
      who: null
    }
  }

  componentDidUpdate() {
    console.warn("ComponentDidUpdate")
    if( this.state.who == null ){
      this.setState({
        active:"The",
        who:"Ayaan Shaikh"
      })  
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello from {this.state.active} {this.state.who}</h1>
        <button onClick={() => {
          this.setState({
            active:"The",
            who:"Ayaan Shaikh"
          })
        }}>
          Activate
        </button>
      </div>
    );

  }
}

export default App;
