import { useState } from "react";

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div>
            <input
                style={{
                    padding: 10,
                    margin: 10,
                }}
                type="text"
                placeholder="title"
                onChange={(e) => {
                    let value = e.target.value;
                    setTitle(value);
                }}
            />
            <br />
            <input
                style={{
                    padding: 10,
                    margin: 10,
                }}
                type="text"
                placeholder="description"
                onChange={(e) => {
                    let value = e.target.value;
                    setDescription(value);
                }}
            />
            <br />
            <button
                style={{
                    margin: 10,
                }}
                onClick={() => {
                    fetch("http://localhost:3030/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }).then(async (res) => {
                        const json = await res.json();
                        alert("Todo added");
                    });
                }}
            >
                Add a todo
            </button>
        </div>
    );
};

export default CreateTodo;
