const express = require("express");
const router = express.Router();
const Todo = require("../controller/todosController");
const todoSchema = require("../validations/todoSchema");
const validator = require("../middlewares/validator");
const jwtAuth = require("../middlewares/jwtAuth");

router.post("/", jwtAuth, validator(todoSchema.todoSchema), Todo.addTodo);

router.get("/",jwtAuth, Todo.getTodo);

router.get(
  "/:id",
  jwtAuth,
  // validator(todoSchema.idSchema, "params"),
  Todo.getTodoById
);

router.delete(
  "/:id",
  jwtAuth,
  validator(todoSchema.idSchema, "params"),
  Todo.deleteTodo
);

router.patch(
  "/:id",
  jwtAuth,
  validator(todoSchema.idSchema, "params"),
  validator(todoSchema.updateTodoSchema),
  Todo.updateTodo
);

module.exports = router;
