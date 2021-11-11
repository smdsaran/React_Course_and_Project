const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const user = require(__dirname + "/routes/User.js");
const video = require(__dirname + "/routes/Video.js");
const auth = require(__dirname + "/routes/Auth.js");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/user", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => console.log("Database Connected"));
mongoose.set("bufferCommands", false);

app.post("/register", user.registerUser);

app.post("/login", user.loginUser);

app.get("/dashboard", auth.authenticateToken, video.dashboard);

app.post("/add-video", video.addVideo);

app.listen(3001, () => {
  console.log("Server Running on Port 3001 .");
});
