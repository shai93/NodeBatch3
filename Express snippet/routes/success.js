var express = require('express');
var router = express.Router();

/* GET success page. */
router.get('/', function(req, res, next) {
  console.log('innnn')
  // console.log('session ', req.session)
  // {
  //   user:req.session.loginUserData
  // }
  res.render('success',{});
});

module.exports = router;
