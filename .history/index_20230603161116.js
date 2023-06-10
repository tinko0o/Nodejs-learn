const express = require("express");
const app = express();
const PORT = 3000;
require("./database/connect");
app.use(express.json());
const todoRouter = require("./routes/todosRoute");

app.use("/todos", todoRouter);
// Register route

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
