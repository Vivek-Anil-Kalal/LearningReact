import './App.css';
import React from 'react';
import Other from './cmp/Other';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
    }
  }

  sty = {
    color: "blue",
    fontSize: "56px"
  }


  render() {
    return (
      <div className="App">
        <h1 style={this.sty}>Learning Portal Creation</h1>
        <h1 style={this.sty}>Check Debugger Tool</h1>
        <Other />
      </div>
    );

  }
}

export default App;
