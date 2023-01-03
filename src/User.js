import React, { Component } from 'react';

export default class User extends Component{
    // this method will called when the component is being delete first this msg will be called and then the component will be called 
    componentWillUnmount(){
        alert("This component is going to be deleted");
    }
    render(){
        return <div>
            <ul>
                <li>Name : Vivek </li>
                <li>Email : Test@gmail.com </li>
                <li>contact : 7984564991 </li>
            </ul>
        </div>
    }
}