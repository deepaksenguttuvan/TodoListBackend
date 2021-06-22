const mongoose = require("mongoose"); 

const todoSchema = new mongoose.Schema({
  // creating a schema for todo
  task: {
    type: String, 
    unique: true, 
    required: true, 
  },
  completed: {
    type: Boolean, 
    default: false, 
  },
})

const todoModel = mongoose.model("Todo", todoSchema); 

module.exports = todoModel;