import { useReducer } from "react";
// useReducer
// useReducer()

// return
// [state,dispatch ]

// useReducer arguments
// 1. reducer function
//2 . initial State

// very easy to manage state in complex app

// REDUCER
// STATE
// ACTION
function reducer(state, action) {
    if (action.type === "INCREASE") {
        return { ...state, count: state.count + 1 };
    }
    if (action.type === "DECREASE") {
        return { ...state, count: state.count - 1 };
    }
    if (action.type === "RESET") {
        return { ...state, count: 0 };
    }
    return state;
}
function ExampleUseReducer() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        firstName: "Harshit",
    });

    const handleIncrease = () => {
        // dispatch takes action object
        dispatch({ type: "INCREASE" });
    };
    const handleDecrease = () => {
        // dispatch takes action object
        dispatch({ type: "DECREASE" });
    };
    const handleReset = () => {
        // dispatch takes action object
        dispatch({ type: "RESET" });
    };
    return (
        <div className="App">
            <h1>Hello {state.firstName}</h1>
            <h2>{state.count}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
}

export default ExampleUseReducer;
