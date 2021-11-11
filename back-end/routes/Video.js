const Video = require("../models/VideoModel");

exports.dashboard = (req, res) => {
  const id = req.user.user_id;

  Video.findOne({ user_id: id }, (err, userDoc) => {
    if (userDoc) {
      const videos = userDoc.video;
      res.send(videos);
    }

    if (!userDoc) {
      res.send([]);
    }
  });
};

//////////////   Add Video ////////////////

exports.addVideo = (req, res) => {
  const videoName = req.body.name;
  const videoUrl = req.body.url;
  const id = req.body.id;

  Video.findOne({ user_id: id }, (err, user) => {
    if (user) {
      user.video.push({ name: videoName, url: videoUrl });
      user.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Video Added to Existing  User .");
          res.send({ message: "Video Added" });
        }
      });
    } else {
      const video = new Video({
        user_id: id,
        video: [
          {
            name: videoName,
            url: videoUrl,
          },
        ],
      });

      video.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Video Added to New User .");
          res.send({ message: "Video Added" });
        }
      });
    }
  });
};
