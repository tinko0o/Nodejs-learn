const jwt = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {
  const headerToken = req.headers.authorization;

  if (!headerToken || !headerToken.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Bad request!",
    });
  }
  const token = headerToken.split(" ")[1];
  if (token) {
    const user = jwt.verify(token, "123456");
    (req.user = user), next();
  }
};

module.exports = jwtAuth;
