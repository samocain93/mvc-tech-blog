const { Post, User, Comment } = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');
// const withAuth = require('../utils/auth');

// Get route for finding all Posts and rendering to page
/* router.get('/', async (req, res) => {
  const postData = await Post.findAll({
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'text', 'user_id', 'post_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
    ],
  })
    .then((postData) => {
      const posts = postData.map((post) => post.get({ plain: true }));
      console.log(posts);
      res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
 */

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['id', 'text', 'post_id', 'user_id', 'created_at'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
// If login is clicked, redirect to login
// Otherwise, if logged in, redirect home

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// New user signup route
router.get('/signup', (req, res) => {
  res.render('signup');
});

// Route to view single post
// This will be when a user clicks on a post on the home page

router.get('/posts/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
      {
        model: User,
      },
      {
        model: Comment,
        include: [
          {
            model: User,
          },
        ],
      },
    ],
  })
    .then((postData) => {
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const post = postData.get({ plain: true });
      console.log(post);
      res.render('single-post', { post, loggedIn: req.session.loggedIn });
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/comment/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
      },
      {
        model: Comment,
        include: [
          {
            model: User,
          },
        ],
      },
    ],
  }).then((postData) => {
    if (!postData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    const post = postData.get({ plain: true });
    res.render('comment', { post, loggedIn: req.session.loggedIn });
  });
});

// Route to edit a post
// This will be when a user clicks on a post on the home page

module.exports = router;
