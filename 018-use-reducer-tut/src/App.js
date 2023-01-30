import { useReducer } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import "./App.css";

const initialState = [
    { id: "1", title: "Learn Guitar", completed: false },
    { id: "2", title: "Learn React", completed: true },
    { id: "3", title: "Find good waltz music ", completed: false },
];
const reducer = (todos, action) => {
    if (action.type === "ADD_TODO") {
        return [...todos, action.payload.newTodo];
    }
    if (action.type === "REMOVE_TODO") {
        return todos.filter((todo) => todo.id !== action.payload.id);
    }

    if (action.type === "TOGGLE_TODO_COMPLETED_STATUS") {
        return todos.map((todo) => {
            if (todo.id === action.payload.id) {
                return { ...todo, completed: !todo.completed };
            } else {
                return todo;
            }
        });
    }
    return todos;
};
function App() {
    const [todos, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm dispatch={dispatch} />
            <Todos todos={todos} dispatch={dispatch} />
        </div>
    );
}

export default App;
