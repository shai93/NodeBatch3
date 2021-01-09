var express = require('express');
var router = express.Router();

/* GET success page. */
router.get('/', function(req, res, next) {
  // console.log('session ', req.session)
  res.render('success',{
    user:req.session.loginUserData
  });
});

module.exports = router;
