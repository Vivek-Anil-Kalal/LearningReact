import React from 'react';

class Forms extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    submit(){
        console.warn(this.state)
    }

    render() {
        return (
            <div>
                <h1>Form Handling</h1>
                <input
                    type="text"
                    name="user"
                    // This method calls evertime the value is changed even if one character is enter this method will be called
                    onChange={(e) => {
                        this.setState({
                            name: e.target.value
                        })
                    }} />
                <br /><br />
                <input
                    type="password"
                    name="password"
                    onChange={(e) => {
                        this.setState({
                            password: e.target.value
                        })
                    }} />
                <br /><br />
                <button onClick={ () => {
                    this.submit()
                }}>Submit</button>
            </div>
        )
    }
}

export default Forms;