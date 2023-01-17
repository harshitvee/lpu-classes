const rootElement = document.getElementById("root");

// console.log("hello world");

// React.createElement

// 3 thing as input
// element type
// properties/attributes :  {}
// children
// console.log("hello");
// const el = React.createElement("h1", { className: "dark-bg" }, "heading"); // <h1> heading </h1>

// react component
// function Heading() {
//     return React.createElement("h1", { className: "dark-bg" }, "heading");
// }
// react component
function Heading() {
    return <h1 className="dark-bg">Heading</h1>;
}

// const el = <h1>Heading</h1>;

// babel
// jsx ----> React.createElement

// ReactDOM.createRoot(rootElement).render(Heading());
ReactDOM.createRoot(rootElement).render(<Heading />);
