var express = require('express');
var router = express.Router();
const Post = require('../model/post');

/* GET new post page. */
router.get('/', function(req, res, next) {
  res.render('newpost',{
    user:req.session.loginUserData
  });
});

// create new post
router.post('/', function(req,res, next){
  Post.create(req.body, function(err, post){
    res.redirect('/post/all')
  })
})

//get all posts
router.get('/all', async function(req, res, next) {
  const allPosts = await Post.find();
  res.render('allpost',{
    allPosts
  });
});


module.exports = router;
