const User = require("../models/user");
const bcrypt = require("bcryptjs");
const register = async (req, res) => {
  const { username, email, password } = req.body;

  const isUserExisted = await User.findOne({ email });
  console.log("isUserExisted:", isUserExisted);

  if (isUserExisted) {
    return res.status(400).json({
      success: false,
      message: "Email is already existed!",
    });
  }
  const salt = bcrypt.genSaltSync(12);
  const hashPassword = bcrypt.hashSync(password, salt);
  // const user = new User({
  //   username,
  //   email,
  //   password: hashPassword,
  // });

  // user.save();
  // return res.status(200).json({
  //   success: true,
  // });
};

module.exports = {
  register,
};
