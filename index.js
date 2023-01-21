const express = require("express");
const app = express();
const videos = require("./routes/video");
const cors = require("cors");

app.use(cors());

app.use("/", (req, res, next) => {
  next();
});

app.use("/videoplayer", videos);

app.listen(8080, function () {
  console.log("Hello World");
});
