const Todo = require("../models/todo");

const addTodo = async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({
      success: false,
    });
  }
  const newTodo = new Todo({
    content,
  });
  await newTodo.save();
  return res.status(201).json({
    success: true,
  });
};

const getTodo = async (req, res) => {
  const todos = await Todo.find();
  return res.status(201).json({
    success: true,
    data: todos,
  });
};

const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.param.id);
  return res.status(201).json({
    success: true,
  });
};

module.exports = {
  addTodo,
  getTodo,
};
