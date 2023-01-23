import { useState } from "react";

// functional component (new way and good way)
// useState

// react hooks
// useState, useEffect, useRef, useReducer

// class component (old way)

// rules

//  useState
// it takes one thing as an input (initial value)

// it returns one  array

function App() {
    const [num, setNum] = useState(1);
    function handleClick() {
        setNum(num + 1);
    }
    return (
        <div>
            <h1>React State</h1>
            <h1>{num}</h1>
            <button onClick={handleClick}>Increase Value</button>
        </div>
    );
}

export default App;
