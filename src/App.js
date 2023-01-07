import './App.css';
import React from 'react';

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

  // this is to specify that all components are loaded now
  componentDidMount() {
    // give url of API inside fetch 
    fetch("https://reqres.in/api/users?page=2").then((resp) => {
      resp.json().then((result) => {
        // console.warn(result.data);
        this.setState({ users: result.data })
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1 style={this.sty}>Fetching API in React</h1>
        <h1 style={this.sty}>Check Console</h1>
        {
          this.state.users ?
            <div align="center">
              <h1>Users Data :</h1>
              <table cellSpacing={10}>
                <tbody>{
                  this.state.users.map((item, i) =>
                    <tr>
                      {/* <td>{item.id}</td> */}
                      <td>{i}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                    </tr>
                  )
                }
                </tbody>
              </table>
            </div>
            :
            null
        }

      </div>
    );

  }
}

export default App;
