const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

mongoose.connect(
    "mongodb+srv://shubhamchodavadiya1122:Shubham_129@cluster0.w32ukw4.mongodb.net/todos"
);

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo,
};
