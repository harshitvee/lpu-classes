import React from "react";
import "./Todo.css";
function Todo({ title, id, dispatch, completed }) {
    const handleDelete = () => {
        // action object
        dispatch({ type: "REMOVE_TODO", payload: { id: id } });
    };

    const handleToggle = () => {
        dispatch({ type: "TOGGLE_COMPLETED", payload: { id: id } });
    };
    return (
        <div className="Todo">
            <p className={`${completed ? "completed" : ""}`}>title: {title}</p>
            <p>id: {id}</p>
            <button onClick={handleToggle}>Toggle Completed</button>
            <button onClick={handleDelete}>Delete Todo</button>
        </div>
    );
}

export default Todo;
