const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  video: [
    {
      name: String,
      url: String,
    },
  ],
});

const Video = new mongoose.model("Video", videoSchema);

module.exports = Video;
