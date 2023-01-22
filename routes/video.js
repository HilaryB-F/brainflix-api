const express = require("express");
const fs = require("node:fs");
const router = express.Router();
const data = require("../data/videos.json");
const { v4 } = require("uuid");

router.get("/", (req, res) => {
  res.json(data);
});
router.post("/", (req, res) => {
  const { title, channel, image, likes, views } = req.body;
  const video = { id: v4(), title, channel, image, likes, views };
  data.push(video);
  // res.json(video);
  fs.writeFileSync("./data/videos.json", JSON.stringify(data), (err) => {
    // if(err){
    //   return res.status(500)
    // }
  });
  res.status(201).json(video);
});

router.get("/:id", (req, res) => {
  getVids(req, res);
});

async function getVids(req, res) {
  const videos = getVid();
  const video = videos.find((video) => video.id === req.params.id);
  if (video) {
    try {
      res.json(video);
    } catch {
      console.log("Error");
    }
  }
}
function getVid() {
  const vidData = fs.readFileSync("data/videos.json");
  return JSON.parse(vidData);
}

module.exports = router;
