import { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { TodoContext } from "./App";
function AddTodoForm() {
    const { dispatch } = useContext(TodoContext);
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
                    console.log(e.target.value);
                    setTitle(e.target.value);
                }}
            />
            <input type="submit" value="Add Todo" />
        </form>
    );
}

export default AddTodoForm;
