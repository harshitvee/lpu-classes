import "./App.css";
import { useState } from "react";
import Todo from "./Todo";
import TodoInputForm from "./TodoInputForm";
function App() {
    const [todos, setTodos] = useState([
        { id: "1", todoName: "learn react", completed: false },
        { id: "2", todoName: "learn javascript", completed: true },
        { id: "3", todoName: "practice react", completed: false },
        { id: "4", todoName: "create project", completed: false },
    ]);

    function toggleCompleted(id) {
        setTodos((prevTodos) => {
            return prevTodos.map((todoObj) => {
                if (todoObj.id === id) {
                    return { ...todoObj, completed: !todoObj.completed };
                } else {
                    return todoObj;
                }
            });
        });
    }

    function addTodo(newTodo) {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    function deleteTodo(id) {
        // const newState = [];
        // for (let todo of todos) {
        //     if (todo.id !== id) {
        //         newState.push(todo);
        //     }
        // }
        // setTodos(newState);

        // filter function will return new filtered array
        // const newState = todos.filter((todo) => {
        //     return todo.id !== id;
        // });
        // setTodos(newState);

        // use implicit return
        // const newState = todos.filter((todo) => todo.id !== id);
        // setTodos(newState);

        // use setState callback and filter
        // setTodos((prevTodos) => {
        //     return prevTodos.filter((prevTodos) => prevTodos.id !== id);
        // });

        // use setState callback and filter and implicit return
        setTodos((prevTodos) =>
            prevTodos.filter((prevTodos) => prevTodos.id !== id)
        );
    }

    function clearTodos() {
        setTodos([]);
    }
    return (
        <>
            <div className="toast">Enter some value</div>
            <h1 style={{ textAlign: "center" }}>Todo List App</h1>
            <TodoInputForm addTodo={addTodo} />
            <div className="container">
                {todos.map((todoObj) => {
                    return (
                        <Todo
                            {...todoObj}
                            deleteTodo={deleteTodo}
                            toggleCompleted={toggleCompleted}
                            key={todoObj.id}
                        />
                    );
                })}
                <button onClick={clearTodos} disabled={todos.length === 0}>
                    Clear All Todos
                </button>
            </div>
        </>
    );
}

export default App;
