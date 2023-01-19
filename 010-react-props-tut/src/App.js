import React from "react";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
function App() {
    return (
        <>
            <Navbar />
            <Greeting firstName="Harshit" lastName="Vashistha" />
        </>
    );
}

export default App;
