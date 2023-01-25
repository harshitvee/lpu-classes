import { useEffect, useState } from "react";

import "./App.css";

// useEffect
// useEffect takes callback function as an input

// default behaviour of callback function

// whenever state changes callback function of useEffect runs
// or you can say that
// after every render callback function of useEffect runs

// useEffect with dependency array
// inside useEffect you can pass second input i.e array (dependency array)

// 1. in case of empty dependency array
// callback function of useEffect will run only after intial render.

// 2. in case dependency array with some value

function App() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        console.log("After intial render");
    }, []);

    useEffect(() => {
        console.log("counter value changed");
    }, [counter1, counter2]);

    return (
        <div className="App">
            <h1>Use Effect Example</h1>

            <h2>counter application 1</h2>
            <h2>{counter1}</h2>
            <button
                onClick={() => {
                    setCounter1((prevCount) => prevCount + 1);
                }}
            >
                Increase
            </button>
            <hr />
            <h2>counter application 2</h2>
            <h2>{counter2}</h2>
            <button
                onClick={() => {
                    setCounter2((prevCount) => prevCount + 1);
                }}
            >
                Increase
            </button>
        </div>
    );
}

export default App;
