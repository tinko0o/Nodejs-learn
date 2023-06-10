const express = require("express");
const Todo = require("../models/todo");
const router = express.Router();

router.post("/", async (req, res) => {
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
});

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  return res.status(201).json({
    success: true,
    data: todos,
  });
});

module.exports = router;
