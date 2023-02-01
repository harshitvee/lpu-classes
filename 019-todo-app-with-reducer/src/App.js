import { useReducer } from "react";
import Todos from "./Todos";
import AddTodoForm from "./AddTodoForm";
import "./App.css";

const initialState = [
    { id: "1", title: "Learn Guitar", completed: false },
    { id: "2", title: "Learn React", completed: true },
    { id: "3", title: "Find good waltz music ", completed: false },
];
const reducer = (todos, action) => {
    if (action.type === "REMOVE_TODO") {
        return todos.filter((todo) => todo.id !== action.payload.id);
    }
    if (action.type === "TOGGLE_COMPLETED") {
        return todos.map((todo) => {
            if (todo.id === action.payload.id) {
                return { ...todo, completed: !todo.completed };
            } else {
                return todo;
            }
        });
    }
    if (action.type === "ADD_TODO") {
        return [...todos, action.payload.newTodo];
    }
    return todos;
};
function App() {
    const [todos, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <h1>Todo App</h1>
            <AddTodoForm dispatch={dispatch} />
            <Todos todos={todos} dispatch={dispatch} />
        </div>
    );
}

export default App;
