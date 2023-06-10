const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");
require("./database/connect");
app.use(express.json());
app.use(morgan("dev"));

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// Register route

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
