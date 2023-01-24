import "./App.css";
import { useState } from "react";
import Todo from "./Todo";
import TodoInputForm from "./TodoInputForm";
function App() {
    const [todos, setTodos] = useState([
        { id: 1, todoName: "learn react", completed: false },
        { id: 2, todoName: "learn javascript", completed: true },
        { id: 3, todoName: "practice react", completed: false },
        { id: 4, todoName: "create project", completed: false },
    ]);

    function addTodo(newTodo) {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Todo List App</h1>
            <TodoInputForm addTodo={addTodo} />
            <div className="container">
                {todos.map((todoObj) => {
                    return <Todo todo={todoObj.todoName} key={todoObj.id} />;
                })}
            </div>
        </>
    );
}

export default App;
