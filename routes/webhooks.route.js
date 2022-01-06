const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();

const server = require('../server');

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


module.exports = router;
