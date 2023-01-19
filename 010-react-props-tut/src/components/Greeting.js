import React from "react";

// function Greeting(props) {
//     return (
//         <h1>
//             Hello {props.firstName} {props.lastName}, How are you ?
//         </h1>
//     );
// }

// function Greeting(props) {
//     const { firstName, lastName } = props;
//     return (
//         <h1>
//             Hello {firstName} {lastName}, How are you ?
//         </h1>
//     );
// }

// function Greeting({ firstName, lastName }) {
//     const isError = false;
//     return (
//         <h1 className={isError ? "error" : ""}>
//             Hello {firstName} {lastName}, How are you ?
//         </h1>
//     );
// }

function Greeting({ firstName, lastName }) {
    return (
        <h1
            style={{
                backgroundColor: "lightcyan",
            }}
        >
            Hello {firstName} {lastName}, How are you ?
        </h1>
    );
}

export default Greeting;
