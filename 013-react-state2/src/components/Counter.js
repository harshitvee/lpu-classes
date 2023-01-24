import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    // function handleIncrease() {
    //     // setCount(count + 1); // primitive

    //     // callback function

    //     // setCount((prevCount) => {
    //     //     return prevCount + 1;
    //     // });

    //     // implicit return
    //     setCount((prevCount) => prevCount + 1);
    // }
    function handleDecrease() {
        setCount((prevCount) => prevCount - 1);
    }
    function handleReset() {
        setCount(0);
    }
    return (
        <>
            <h1>counter app</h1>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount((prevCount) => prevCount + 1);
                }}
            >
                Increase
            </button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>Decrease</button>
        </>
    );
}

export default Counter;
