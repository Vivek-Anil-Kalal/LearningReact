import logo from './logo.svg';
import './App.css';
import React from 'react';

export class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data:null
    }
    console.warn("Constructor Called")
  }
  
  componentDidMount(){
    this.setState({data:"Ayaan"})
    console.warn("componentDidMount")
  }
  render(){
    console.warn("Render")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
        </header>
      </div>
    );
  
  }
}

export default App;
