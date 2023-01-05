import './App.css';
import React from 'react';

export class App extends React.Component {

  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
    }
  }

  isValid() {
    if (!this.state.email.includes("@")) {
      console.log(this.state.email.value)
      this.setState({
        emailError: "Invalid Email"
      })
    } else if (this.state.password.length < 5) {
      this.setState({
        passwordError: "Invalid ! Password lenght must be greater or equal to 5"
      })
    } else {
      return true;
    }

  }
  submit() {
    // this binding with this is necessary nhi toh vo isValid method ko pehchane ga hi nhi
    if (this.isValid()) {
      this.setState({
        emailError: "",
        passwordError: ""
      })
      alert("Form is Submitted")
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Form Validation</h1>
        Email : <input type="text" onChange={(event) => {
          console.log(this.state.email)
          this.setState({
            email: event.target.value
          })
        }} />
        <p>{this.state.emailError}</p>
        Password : <input type="password" onChange={(event) => {
          this.setState({
            password: event.target.value
          })
        }} />
        <p>{this.state.passwordError}</p>
        <button onClick={() => this.submit()}>Submit</button>
      </div>
    );

  }
}

export default App;
