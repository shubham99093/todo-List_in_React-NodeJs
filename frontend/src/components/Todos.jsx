export function Todos(props) {
    const { todos } = props;
    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={() => {
                        fetch("http://localhost:3030/complated", {
                            method: "PUT",
                            body: JSON.stringify({
                                id: todo._id
                            }),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }).then(async (res) => {
                            const json = await res.json();
                            alert("Todo Complated");
                        });
                    }}
                    >
                        {todo.completed == true
                            ? "Completed"
                            : "Mark as completed"}
                    </button>
                </div>
            ))}
        </div>
    );
}