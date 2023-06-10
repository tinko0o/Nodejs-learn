const express = require("express");
const router = express.Router();
const Todo = require("../controller/todosController");
const todoSchema = require("../validations/todoSchema");
const validator = require("../middlewares/validator");

router.post("/", validator(todoSchema.todoSchema), Todo.addTodo);

router.get("/", Todo.getTodo);

router.delete(
  "/:id",
  validator(todoSchema.idSchema, "params"),
  Todo.deleteTodo
);

router.patch(
  "/:id",
  validator(todoSchema.idSchema, "params"),
  validator(todoSchema.todoSchema),
  Todo.updateTodo
);

module.exports = router;
