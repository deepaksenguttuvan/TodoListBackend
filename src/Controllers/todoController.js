const ToDo = require("../Models/todoModel");

function success(res, payload) {
    return res.status(200).json(payload)
}
  
//get all todo
const getTodo = async (req, res, next) => {
    try {
        const todos = await ToDo.find({});
        return success(res, todos);
    } catch(err) {
        console.log(err);
        next({ status: 400, message: "failed to get todos" });
    }
};

//create new todo
const createTodo = async (req, res, next) => {
    try {
        let newToDo = new ToDo(req.body)
        const todo = await newToDo.save();
        return success(res, todo);
    } catch(err) {
        console.log(err);
        next({ status: 400, message: "failed to create todo" });
    }
};

//update todo
const updateTodo = async (req, res, next) => {
    try {
        const todo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {new: true,});
        return success(res, todo);
    } catch(err) {
        console.log(err);
        next({ status: 400, message: "failed to update todo" });
    }
};

//delete todo
const deleteTodo = async (req, res, next) => {
    try {
        await ToDo.findByIdAndRemove(req.params.id);
        return success(res, "todo deleted!");
    } catch(err) {
        next({ status: 400, message: "failed to delete todo" });
    }
};

module.exports = {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}