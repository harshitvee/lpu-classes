import React from "react";
import "./Todo.css";
// function Todo(props) {
//     return <li>{props.todoItem}</li>;
// }
function Todo({ todoItem, completed }) {
    return <li className={completed ? "completed" : ""}>{todoItem}</li>;
}

export default Todo;
