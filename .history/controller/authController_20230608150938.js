const User = require("../models/user");

const register = (req, res) => {
  const { username, email, password } = req.body;

  const user = new User({
    username,
    email,
    password,
  });

  user.save();
  return res.status(200).json({
    success: true,
  });
};

module.exports = {
  register,
};
