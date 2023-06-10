const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/nodejs-course")
  .then(() => {
    console.log("connect sucsess");
  })
  .catch(() => {
    console.log("connect fail");
  });
