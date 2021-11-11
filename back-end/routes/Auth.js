require("dotenv").config();

const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  // console.log(token);
  // Bearer TOKEN
  if (token === null) {
    res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) {
      res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};
