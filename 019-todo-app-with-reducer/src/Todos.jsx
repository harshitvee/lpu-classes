import React from "react";
import Todo from "./Todo";
function Todos({ todos, dispatch }) {
    return (
        <div>
            {todos.map((todo) => {
                return <Todo {...todo} dispatch={dispatch} key={todo.id} />;
            })}
        </div>
    );
}

export default Todos;
