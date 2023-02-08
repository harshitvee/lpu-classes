import "./App.css";
import { useReducer, useState } from "react";
//

const initialState = ["item1", "item2"];

function reducer(state, action) {
    if (action.type === "ADD_ITEM") {
        return [...state, "new item"];
    }
    return state;
}

//   setState ----> state update done

// dispatch ---> reducer ---> state update done

// dispatch

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    function addItem() {
        console.log("Add Item");
        dispatch({ type: "ADD_ITEM" });
    }
    return (
        <div className="App">
            {state.map((item) => (
                <li>{item}</li>
            ))}
            <button onClick={addItem}>Add item</button>
        </div>
    );
}

export default App;
