import React from "react";
import "./Todo.css";
function Todo({ todoName, id, deleteTodo, completed }) {
    return (
        <div className="todo">
            <h3 className="todoName">{todoName}</h3>
            <div className="button-wrapper">
                <button>Complete</button>
                <button
                    onClick={() => {
                        deleteTodo(id);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Todo;
