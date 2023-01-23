function ClickEventExample() {
    function handleClick(e) {
        console.log(e.target);
        console.log("hello world ");
    }
    return (
        <div className="App">
            <h1>React Click Events</h1>
            <button onClick={handleClick}>Cick me</button>
        </div>
    );
}

export default ClickEventExample;
