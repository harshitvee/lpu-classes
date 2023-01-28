import { useState, useEffect } from "react";

function ExampleUseEffect() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // case 1

    // useEffect(() => {
    //     console.log("useEffect Callback Function");
    // });

    // case 2

    // useEffect(() => {
    //     console.log("useEffect Callback Function");
    // }, []);

    // case 3

    useEffect(() => {
        console.log("count value changed");
    }, [count]);
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
            {/* ------------------------------------------------------------------------------  */}
            <h2>counter app 2 to change state</h2>
            <h3>{count2}</h3>
            <button
                onClick={() => {
                    setCount2((count) => count + 1);
                }}
            >
                Increase Count2 (change State)
            </button>
        </div>
    );
}

export default ExampleUseEffect;
