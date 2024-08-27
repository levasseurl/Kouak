var express = require('express');
var router = express.Router();

// Home
router.get('/', function(req, res, next) {
  res.status(200).send("Kouak API 2024");
});

module.exports = router;
