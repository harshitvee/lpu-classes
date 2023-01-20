// import { v4 as uuid } from "uuid";
import Todo from "./Todo";

function App() {
    // const todos = ["teach students ", "edit videos ", "learn react "];

    const todos = [
        { id: 1, todoItem: "teach student", completed: false },
        { id: 2, todoItem: "edit videos", completed: true },
        { id: 3, todoItem: "learn react", completed: false },
    ];
    // in order to render list on screen you have to use map function

    // key prop
    // 1. unique for every element
    // 2. value of key prop should not change

    // use implicit return
    // return (
    //     <div className="App">
    //         <ul>
    //             {todos.map((todo) => (
    //                 <li>{todo}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );
    return (
        <div className="App">
            <ul>
                {todos.map((todo) => {
                    return (
                        <Todo
                            key={todo.id}
                            todoItem={todo.todoItem}
                            completed={todo.completed}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
