var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', function (req, res) {
  const today = new Date()
  const year = today.getFullYear()
  res.json({ result: year });
});

module.exports = router;
