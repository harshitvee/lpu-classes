// import React, { useState } from "react";
// import { v4 as uuid } from "uuid";
// function ManageStateInArray() {
//     // const todos = ["watch movie", "study guitar", "play cricket"];
//     const [todos, setTodos] = useState([
//         "watch movie",
//         "study guitar",
//         "play cricket",
//     ]);
//     function handleNewTodo() {
//         // const newArray = [...todos];
//         // newArray.push("new Todo");
//         // setTodos(newArray);

//         setTodos((prevTodos) => {
//             return [...prevTodos, "new Todo"];
//         });
//     }
//     return (
//         <div>
//             <h1>Manage State in Arrays</h1>
//             <ul>
//                 {todos.map((todo) => {
//                     return <li key={uuid()}>{todo}</li>;
//                 })}
//             </ul>

//             <button onClick={handleNewTodo}>Add new todo</button>
//         </div>
//     );
// }

// export default ManageStateInArray;

import React, { useState } from "react";

import { v4 as uuid } from "uuid";

function ManageStateInArray() {
    const [todos, setTodos] = useState([
        "learn react",
        "create project",
        "add more functionality",
    ]);
    function handleNewTodo() {
        console.log("handle new todo");
        setTodos((oldList) => {
            return [...oldList, "new Item"];
        });
    }
    return (
        <>
            <ul>
                {todos.map((toodItem) => {
                    return <li key={uuid()}>{toodItem}</li>;
                })}
            </ul>
            <button onClick={handleNewTodo}>Add new todo</button>
        </>
    );
}

export default ManageStateInArray;
