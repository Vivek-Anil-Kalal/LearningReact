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

  // componentDidUpdate is called when the state of any component is updated or changed 
  componentDidUpdate() {
    console.warn("ComponentDidUpdate")
    // here if you don't put the loop then it will go inside the infinite loop 
    if( this.state.who == null ){
      // becasue everytime state is changed the update method will called and inside the update method we are again changing the state this will form a loop
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
        {/* here when this state will be changed first time then the componentDidUpdate will be called  */}
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
