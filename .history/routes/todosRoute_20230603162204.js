const express = require("express");
const router = express.Router();
const Todo = require("../controller/todosController");
router.post("/", Todo.addTodo);

router.get("/", Todo.getTodo);

module.exports = router;
