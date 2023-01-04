import React,{useEffect,useState} from "react";

const Forms = props => {
    let [count,setCount] = useState(0)
    
    // this will be called Everytime as work as componentDidMount
    useEffect( () => {
        console.warn(count)
    },[count==5])// this is specific condition that when the count will be off 5 then only the method will be called
    // if you want that it just call first time then we can leave it as blank
    return (
        <div>
            <h1>Use Effect Hooks in React js :- {count}</h1>
            <button onClick={ () => {
                setCount(++count)
            }}>Increment</button>
        </div>
    )
}

export default Forms ;