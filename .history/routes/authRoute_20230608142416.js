const express = require("express");
const router = express.Router();
const Auth = require("../controller/authController");

router.post("/register", Auth.register);

module.exports = router;
