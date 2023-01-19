import React from "react";

import Card from "./components/Card";
import Greeting from "./components/Greeting";

function App() {
    return (
        <>
            <Card>
                <Greeting firstName="Harshit" lastName="Vashistha" />
            </Card>
            <Card>
                <Greeting firstName="Harshit" lastName="Vashistha" />
            </Card>
            <Card>
                <Greeting firstName="Harshit" lastName="Vashistha" />
            </Card>
        </>
    );
}

export default App;
