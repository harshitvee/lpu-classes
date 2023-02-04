import { useState } from "react";

import "./App.css";

const API_KEY = import.meta.env.VITE_API_KEY;
function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>Hello</h1>
        </div>
    );
}

export default App;
