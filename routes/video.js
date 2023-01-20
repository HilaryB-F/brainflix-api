const express = require("express");
const router = express.Router();
const data = require("../data/videos.json");


router.get("/", (req, res)=>{
    res.json(data)
})

router.get("/:id", (req, res)=>{
    res.json(data.id)
    
    
})

module.exports = router;