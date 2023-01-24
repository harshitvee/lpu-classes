import { useState } from "react";

function HandleInputs() {
    const [username, setUsername] = useState("");
    function handleUsername(e) {
        // console.log("handle username called");
        setUsername(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        alert(username);
    }
    return (
        <div className="App">
            <h1>Handle Form Inputs</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsername}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default HandleInputs;
