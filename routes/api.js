let express = require('express');
let router = express.Router();

router.get('/homeData', (req, res) => {
  let homeData = require('../data/homeData.json');
  res.json(homeData);
})


module.exports = router;