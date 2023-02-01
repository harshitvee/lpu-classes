import React from "react";
import Todo from "./Todo";
function Todos({ todos }) {
    return (
        <div>
            {todos.map((todo) => {
                return <Todo {...todo} key={todo.id} />;
            })}
        </div>
    );
}

export default Todos;
