import React from "react";
import "./Todo.css";
function Todo({ title, completed, id, dispatch }) {
    const handleDelete = () => {
        dispatch({ type: "REMOVE_TODO", payload: { id: id } });
    };
    const handleToggle = () => {
        dispatch({ type: "TOGGLE_TODO_COMPLETED_STATUS", payload: { id: id } });
    };
    return (
        <div className="todo">
            <p className={`title ${completed ? "completed" : ""}`}>
                title : {title}
            </p>
            <p>id : {id}</p>
            <button onClick={handleDelete}>Delete Todo</button>
            <button onClick={handleToggle}>Toggle Completed</button>
        </div>
    );
}

export default Todo;
