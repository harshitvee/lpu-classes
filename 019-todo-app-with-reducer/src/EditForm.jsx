import { useState } from "react";

function EditForm({ title, dispatch, id, setIsEditingToFalse }) {
    const [newTitle, setNewTitle] = useState(title);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "EDIT_TODO",
            payload: { id: id, newTitle: newTitle },
        });
        setNewTitle("");
        setIsEditingToFalse();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTitle}
                onChange={(e) => {
                    setNewTitle(e.target.value);
                }}
            />
            <input type="submit" value="Done" />
        </form>
    );
}

export default EditForm;
