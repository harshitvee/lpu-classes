import { useRef, useState, useEffect } from "react";
import "./App.css";

// uncontrolled

// access DOM elements

// function App() {
//     const inputElement = useRef();
//     const pElement = useRef();
//     function handleSubmit(e) {
//         e.preventDefault();
//         pElement.current.style.background = "blue";
//         console.log(inputElement.current.value);
//     }
//     return (
//         <form className="App" onSubmit={handleSubmit}>
//             <p ref={pElement}>paragraph</p>
//             <input type="text" ref={inputElement} />
//             <input type="submit" value="Submit" />
//         </form>
//     );
// }

// useRef ---> app wont re render

// function App() {
//     const [username, setUsername] = useState("");
//     const renderCount = useRef(0);
//     useEffect(() => {
//         renderCount.current = renderCount.current + 1;
//     });
//     return (
//         <form className="App">
//             <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <p>{username}</p>
//             <p>Render Count: {renderCount.current}</p>
//         </form>
//     );
// }

// focus on load
function App() {
    const [username, setUsername] = useState("");
    const inputElement = useRef(0);
    useEffect(() => {
        inputElement.current.focus();
    }, []);
    return (
        <form className="App">
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                ref={inputElement}
            />
            <p>{username}</p>
        </form>
    );
}
export default App;
