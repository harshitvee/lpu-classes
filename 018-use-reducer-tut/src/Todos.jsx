import React from "react";
import Todo from "./Todo";

function Todos({ todos, dispatch }) {
    return (
        <div>
            <h2>My all Todos</h2>
            {todos.map((todo) => {
                return <Todo key={todo.id} {...todo} dispatch={dispatch} />;
            })}
        </div>
    );
}

export default Todos;
