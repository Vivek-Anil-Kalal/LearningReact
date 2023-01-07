import React from 'react';
import reactDOM from 'react-dom' ;

export default class Other extends React.Component {
    render(){
        // // this normal return will append this Component inside the root div 
        // return <div>
        //     <h1>This is Other Component</h1>
        // </div>

        // but this type of return will return element in the id which we have given to it 
        return reactDOM.createPortal(
            <h1>This is Other Component</h1>,
            document.getElementById('other-root')
        )
    }
}