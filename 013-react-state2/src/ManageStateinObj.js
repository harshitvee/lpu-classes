import React, { useState } from "react";

function ManageStateinObj() {
    const [myObject, setMyObject] = useState({
        key1: "value1",
        key2: "value2",
        key3: "value3",
    });
    function handleNewKeyValuePair() {
        const newObj = { ...myObject, key4: "value4" };
        setMyObject(newObj);
    }
    return (
        <div>
            <h1>Manage State in Objects</h1>
            <button onClick={handleNewKeyValuePair}>
                Add New Key Value Pair
            </button>
        </div>
    );
}

export default ManageStateinObj;
