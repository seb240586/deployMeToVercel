var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', function (req, res) {
  const today = new Date().getFullYear().toString()
  res.json({ year: today });
});

module.exports = router;
