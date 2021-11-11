require("dotenv").config();

const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");

exports.registerUser = (req, res) => {
  var user_id = req.body.userId;
  var email = req.body.email;
  var password = req.body.password;

  bcrypt.hash(password, saltRounds, function (err, hash) {
    // Store hash in your password DB.

    const user = new User({
      user_id: user_id,
      email: email,
      password: hash,
    });

    user.save((err, doc) => {
      if (err) {
        console.log(err);
        res.send({ message: "Data Saving to DB is Failed ." });
        mongoose.connection.close();
      } else {
        res.send(doc);
        console.log("Registration Success .");
        // mongoose.connection.close();
      }
    });
  });
};

/////////// Login ///////////////

exports.loginUser = (req, res) => {
  var user_id = req.body.userId;
  var email = req.body.email;
  var pword = req.body.password;

  // console.log(email);
  // console.log(password);

  User.findOne({ email: email }, (err, docs) => {
    if (err) {
      console.log(err);

      res.send({ message: "User Not registered." });
      mongoose.connection.close();
    }
    if (docs) {
      bcrypt.compare(pword, docs.password, function (err, result) {
        // result == true
        if (!err) {
          const user = { user_id: docs.user_id };
          console.log(user);
          const accessToken = generateAccessToken(user);
          res.json({ accessToken: accessToken, user_id: docs.user_id });
          console.log("Login Success");
          // res.send(docs);
        } else {
          res.send({ message: "Email and Password missmatch ." });
        }
      });

      // mongoose.connection.close();
    }
  });
};

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}
