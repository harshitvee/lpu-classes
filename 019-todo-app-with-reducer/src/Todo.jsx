import { useState } from "react";
import EditForm from "./EditForm";
import "./Todo.css";
function Todo({ title, id, dispatch, completed }) {
    const [isEditing, setIsEditing] = useState(false);
    const handleDelete = () => {
        // action object
        dispatch({ type: "REMOVE_TODO", payload: { id: id } });
    };
    const handleEdit = () => {
        setIsEditing(true);
    };
    const handleToggle = () => {
        dispatch({ type: "TOGGLE_COMPLETED", payload: { id: id } });
    };

    const setIsEditingToFalse = () => {
        setIsEditing(false);
    };
    return (
        <div className="Todo">
            {isEditing ? (
                <EditForm
                    title={title}
                    id={id}
                    dispatch={dispatch}
                    setIsEditingToFalse={setIsEditingToFalse}
                />
            ) : (
                <p className={`${completed ? "completed" : ""}`}>
                    title: {title}
                </p>
            )}
            <p>id: {id}</p>
            <button onClick={handleToggle}>Toggle Completed</button>
            <button onClick={handleDelete}>Delete Todo</button>
            <button onClick={handleEdit} disabled={isEditing}>
                Edit
            </button>
        </div>
    );
}

export default Todo;
