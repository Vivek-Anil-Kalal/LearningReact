import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertDemo from './cmp/AlertDemo';

export class App extends React.Component {

  render() {
    return (
      <div className="App">
        <input type="text" />
        <button>Click Me to Gain focus</button>
      </div>
    );

  }
}

export default App;
