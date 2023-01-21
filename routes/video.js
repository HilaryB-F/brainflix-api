const express = require("express");
const fs = require("node:fs");
const router = express.Router();
const data = require("../data/videos.json");


router.get("/", (req, res)=>{
    res.json(data)
})

router.get("/:id", (req, res)=>{
    getVids(req, res)
    
})

async function getVids(req,res){
    const videos = getVid();
    const video = videos.find((video)=> video.id === req.params.id);
    if (video){
        try{
            res.json(video)
        }catch{
            console.log("Error")
        }
    }
}
function getVid(){
    const vidData = fs.readFileSync('data/videos.json')
    return JSON.parse(vidData);
}

module.exports = router;