const { default: axios } = require("axios");
const express = require("express");

const router = express.Router();

let switch1 = 0;
let switch2 = 0;
let switch3 = 0;
let switch4 = 0;

router.get("/", (req, res) => {
  console.log("webhook hit!!");
  try {
    res.status(200);
    res.json({
    
      switch1, switch2, switch3, switch4 
    });
  } catch (error) {
    res.status(400);
    res.json({ message: error.message });
  }
});

router.post("/update-switches", (req, res) => {
  try {
    if (req.body) {
      switch1 = req.body.switch1 === true ? 1 : 0;
      switch2 = req.body.switch2 === true ? 1 : 0;
      switch3 = req.body.switch3 === true ? 1 : 0;
      switch4 = req.body.switch4 === true ? 1 : 0;
    }
    res.status(200);
    res.json({ message: "success" });
  } catch (error) {
    res.status(400);
    res.json({ message: error.message });
  }
});

module.exports = router;
