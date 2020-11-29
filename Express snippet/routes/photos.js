var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/shailesh', function(req, res, next) {
  res.send(`Shailesh's DP`);
});

module.exports = router;
