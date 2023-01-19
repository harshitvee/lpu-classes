import React from "react";

function Greeting(props) {
    console.log(props); // {firstName: "Harshit", lastName: "Vashistha"}
    return (
        <h1>
            Hello {props.firstName} {props.lastName}, How are you ?
        </h1>
    );
}

export default Greeting;
