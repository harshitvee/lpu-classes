import "./App.css";
import { useState, useEffect } from "react";
// react hooks starts with 'use'

// when state changes component re-render

// useEffect
// useEffect can take 2 things as input
// 1. Callback function
// 2. Dependency Array

// Case 1
// useEffect without dependency array , useEffect( ()=> {})
// callback function will run after every render
function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect Callback Function");
    });
    return (
        <div className="App">
            <h1>use effect tutorial</h1>

            <h2>counter app to change state</h2>
            <h3>{count}</h3>
            <button
                onClick={() => {
                    setCount((count) => count + 1);
                }}
            >
                Increase Count (change State)
            </button>
        </div>
    );
}

export default App;
