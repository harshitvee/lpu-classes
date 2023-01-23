import React from "react";

// function Greeting(props) {
//     return (
//         <h2>
//             {props.firstName} {props.lastName}
//         </h2>
//     );
// }
// function Greeting(props) {
//     const { firstName, lastName } = props;
//     return (
//         <h2>
//             {firstName} {lastName}
//         </h2>
//     );
// }
function Greeting({ firstName, lastName }) {
    return (
        <h2>
            Hello, {firstName} {lastName}
        </h2>
    );
}

export default Greeting;
