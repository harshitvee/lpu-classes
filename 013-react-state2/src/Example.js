import "./App.css";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import Todo from "./components/Todo";
import Counter from "./components/Counter";

import { v4 as uuid } from "uuid";
const todos = ["watch got", "play cricket", "learn music"];

function App() {
    return (
        <div className="App">
            <Card>
                <h1>Hello</h1>
            </Card>
            <Card>
                <Greeting firstName="john" />
            </Card>

            <Greeting firstName="jane" />
            <Greeting firstName="jolly" />
            <Greeting firstName="jenny" />
            <Greeting firstName="john" />
            <h1>RENDER LIST</h1>
            <Card>
                <ul>
                    {todos.map((todoItem) => {
                        return <Todo todo={todoItem} key={uuid()} />;
                    })}
                </ul>
            </Card>

            <hr />
            <hr />
            <hr />
            <h1>React State</h1>
            <h2>Counter Application</h2>
            <hr />
            <Counter />
        </div>
    );
}

export default App;
