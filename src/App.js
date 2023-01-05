import './App.css';
import React from 'react';

export class App extends React.Component {

  constructor() {
    super()
    this.state = {
      list: [
        { name: "Ayaan Shaikh", email: "ayaan@gmail.com", phoneNumber: "7984564991" },
        { name: "Vv", email: "a@gmail.com", phoneNumber: "9999999999" },
        { name: "Dabba", email: "vv@gmail.com", phoneNumber: "9866456433" },
        { name: "Dabba", email: "vv@gmail.com", phoneNumber: "9866456433" },
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Listing the Elements</h1>
        <table cellSpacing="10" align='center' border="2" >
          <thead>
            <th>Name </th>
            <th>Email </th>
            <th>PhoneNumber </th>
          </thead>
          <tbody>
            {/* <tr>
              <td>{this.state.list.map((item) =>
                <div>{item.name}</div>
              )}</td>
              <td>{this.state.list.map((item) =>
                <div>{item.email}</div>
              )}</td>
              <td>{this.state.list.map((item) =>
                <div>{item.phoneNumber}</div>
              )}</td>
            </tr> */}
            {
              this.state.list.map((item)=>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );

  }
}

export default App;
