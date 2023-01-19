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

// function Greeting({ firstName, lastName }) {
//     return (
//         <h1
//             style={{
//                 backgroundColor: "lightcyan",
//             }}
//             className="greeting"
//         >
//             Hello {firstName} {lastName}, How are you ?
//         </h1>
//     );
// }

// function Greeting({ firstName, lastName }) {
//     return (
//         <div className="greeting-wrapper">
//             <h1>
//                 Hello {firstName} {lastName}
//             </h1>
//             <hr />
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Accusamus provident facere aperiam quod tempora ullam adipisci
//                 perspiciatis mollitia at quidem.
//             </p>
//         </div>
//     );
// }

function Greeting({ firstName, lastName }) {
    return (
        <h1>
            Hello {firstName} {lastName}
        </h1>
    );
}

export default Greeting;
