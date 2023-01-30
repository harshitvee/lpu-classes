import { useState } from "react";
import { v4 as uuid } from "uuid";
function TodoForm({ dispatch }) {
    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: uuid(),
            title: title,
            completed: false,
        };
        dispatch({ type: "ADD_TODO", payload: { newTodo: newTodo } });
        setTitle("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <input type="submit" value="Add Todo" />
        </form>
    );
}

export default TodoForm;
