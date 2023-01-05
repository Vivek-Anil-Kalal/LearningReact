import React from 'react';
import './Style.css';

export default function Style(props){
    const h2 ={
        color:"white",
        backgroundColor:"black"
    }
    const h3 ={
        color:"green",
        fontSize:"40px"
    }

    return (
        <div>
            <h1>Styling In React Using CSS</h1>
            <h2 className='header'>This is Global styling</h2>
            <h3 style={h2}>This is inline</h3>
            <h3 style={ props.data == "apply" ? h2 : h3} >This is Conditional CSS</h3>
        </div>
    )
}