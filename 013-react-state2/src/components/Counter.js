import React, { useState } from "react";

// first rule of hook

// setState callback function
function Counter() {
    const [count, setCount] = useState(0);

    // function handleIncrease() {
    //     // setCount(count + 1); // number, string
    //     // setCount((previousState) => {
    //     //     return previousState + 1;
    //     // });

    //     // implicit return
    //     setCount((prevCount) => prevCount + 1);
    // }
    function handleReset() {
        setCount(0);
    }
    function handleDecrease() {
        // setCount(count - 1);
        // setCount((previousState) => {
        //     return previousState - 1;
        // });
        // implicit return
        setCount((prevCount) => prevCount - 1);
    }
    return (
        <div className="counter">
            <h1> Count : {count}</h1>
            <button
                onClick={() => {
                    setCount((prevState) => prevState + 1);
                }}
            >
                Increase
            </button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
}

export default Counter;
