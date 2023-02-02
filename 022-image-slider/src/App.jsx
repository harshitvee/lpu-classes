import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ImageSlider from "./ImageSlider";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <ImageSlider />
        </div>
    );
}

export default App;
