var express = require('express');
var router = express.Router();
const Post = require('../model/post');

/* GET new post page. */
router.get('/', function (req, res, next) {
  res.render('newpost', {
    user: req.session.loginUserData
  });
});

// create new post
router.post('/', function (req, res, next) {
  const { image } = req.files;

  let uploadPath = __dirname + '/../public/images/' + image.name;
  image.mv(uploadPath, function (err) {
    if (err)
      return res.status(500).send(err);

    Post.create({
      ...req.body,
      image: image.name
    }, function (err, post) {
      res.redirect('/post/all')
    })
  });

})

//get all posts
router.get('/all', async function (req, res, next) {
  const allPosts = await Post.find();
  res.render('allpost', {
    allPosts
  });
});


//get all posts
router.get('/all/:postid', async function (req, res, next) {
  const post = await Post.findById(req.params.postid);
  res.render('post', {
    post
  });
});


module.exports = router;
