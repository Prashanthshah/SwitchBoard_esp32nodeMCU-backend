const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();

let switch1 = false;
let switch2 = false;
let switch3 = false;
let switch4 = false;

router.get('/', (req, res) => {
  console.log("webhook hit!!");
  try {
   res.status(200);
   res.json({message: 'success'})
  } catch (error) {
    res.status(400);
    res.json({ message: error.message });
  }
});


router.post('/update-switches', (req, res) => {
  try {
  if(req.body){
    switch1 = req.body.switch1;
    switch2 = req.body.switch2;
    switch3 = req.body.switch3;
    switch4 = req.body.switch4;
  }
   res.status(200);
   res.json({message: 'success'})
  } catch (error) {
    res.status(400);
    res.json({ message: error.message });
  }
});


module.exports = router;
