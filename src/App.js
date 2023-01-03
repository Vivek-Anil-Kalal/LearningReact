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
  

  // this method will be called when the component will be fully loaded and also after the render method is called 
  // u can see in the output in console there the construtor called first then the render method is called then this method is called
  // after the state is changed the render method is re called ...
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
