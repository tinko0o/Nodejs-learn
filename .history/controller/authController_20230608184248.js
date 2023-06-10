const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const isUserExisted = await User.findOne({ email });

  if (isUserExisted) {
    return res.status(400).json({
      success: false,
      message: "Email is already existed!",
    });
  }
  const salt = bcrypt.genSaltSync(12);
  const hashPassword = bcrypt.hashSync(password, salt);
  const user = new User({
    username,
    email,
    password: hashPassword,
  });

  user.save();
  return res.status(200).json({
    success: true,
  });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token = jwt.sign(
      {
        userID: user._id,
        username: user.username,
        email: user.email,
      },
      "123456",
      { expiresIn: "1d" }
    );

    return res.status(401).json({
      success: false,
      data: token,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Bad request!",
    });
  }
};

module.exports = {
  register,
  login,
};
