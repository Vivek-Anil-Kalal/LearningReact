import './App.css';
import React from 'react';
import Home from './cmp/Home';
import About from './cmp/About';
import Forms from './cmp/Forms';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

export class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Link to="">Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/forms"> Forms </Link>

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/forms' element={<Forms/>} />
          </Routes>
        </Router>
      </div>
    );

  }
}

export default App;
