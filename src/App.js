import './App.css';
import React from 'react';

/* Ref is used to manipulates the dom we are recommended not to directly manipulate DOM though if in case we need to we can 
edit or change it with the help of Ref */ 

export class App extends React.Component {
  constructor() {
    super();
    this.userRef=React.createRef();
  }

  sty = {
    color: "blue",
    fontSize: "56px"
  }
  // this function is to gain the focus on the text field when the button is clicked
  editValue(){
    // using userRef we can get focus on element 
    this.userRef.current.focus() ;
    // using userRef we can Change the value of element
    this.userRef.current.value = "Ayaan Shaikh" ;
  }

  render() {
    return (
      <div className="App">
        <h1 style={this.sty}>Showing the use of Ref in React</h1>
        {/* for the Element for which we want to change in dom we can give it attribute ref to use it */}
        <input ref={this.userRef} type="text" />
        <button onClick={ ()=> this.editValue()}>Click Me to Gain focus</button>
      </div>
    );

  }
}

export default App;
