const express = require("express");
const router = express.Router();
const Todo = require("../controller/todosController");
const todoSchema = require("../validations/todoSchema");
const validator = require("../middlewares/validator");

router.post("/", validator(todoSchema.todoSchema), Todo.addTodo);

router.get("/", Todo.getTodo);

router.delete(
  "/",
  validator(todoSchema.deleteSchema, "param"),
  Todo.deleteTodo
);

module.exports = router;
