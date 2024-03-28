const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });
    res.json({
        msg: "Todo created",
    });
});

app.get("/todos", async function (req, res) {
    const todos = await todo.find();
    res.json({
        todos,
    });
});

app.put("/complated", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }
    await todo.updateOne({ _id: req.body.id }, { completed: true });
    res.json({
        msg: "Todo mark as Complated",
    });
});

app.listen(3030, () => {
    console.log(`Example app listening on port 3030`);
});
