const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
