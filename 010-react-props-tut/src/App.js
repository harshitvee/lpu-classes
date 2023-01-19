import React from "react";

import Greeting from "./components/Greeting";
function App() {
    return (
        <>
            <Greeting firstName="Harshit" lastName="Vashistha" />
            <Greeting firstName="John" lastName="Doe" />
            <Greeting firstName="Jane" lastName="Doe" />
            <Greeting firstName="Mohit" lastName="Vashistha" />
        </>
    );
}

export default App;
