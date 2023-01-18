import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

// functional component

// class based component

// function HelloWorld() {
//     return (
//         <React.Fragment>
//             <h1>Heading</h1>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
//                 ex molestiae voluptate dignissimos ratione magnam iure? Dolore
//                 mollitia voluptate inventore laudantium impedit. Eligendi
//                 accusantium, obcaecati adipisci similique nulla esse possimus
//                 autem in dolorem dignissimos officia cum veniam excepturi
//                 delectus debitis assumenda iure, velit qui corporis nemo ipsum.
//                 Natus, libero in.
//             </p>
//         </React.Fragment>
//     );
// }
function HelloWorld() {
    const firstName = "Harshit";
    const lastName = "Sharma";
    return (
        <>
            <h1 className="heading">Heading</h1>
            <h1>Hello, {firstName + " " + lastName} </h1>
            <h1>Hello, {`${firstName} ${lastName}`} </h1>
        </>
    );
}

root.render(<HelloWorld />);
