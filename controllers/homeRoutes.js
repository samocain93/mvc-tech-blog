
const { Post, User, Comment} = require('../models');
const router = require('express').Router();
const withAuth = require('../utils/auth')


// Working route to render public index html page for testing 

// router.get('/', async (req, res) => {
//     try {
//         await res.render('./public/index.html')
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })


// Working route to render all posts to page

// router.get('/', (req, res) => {
//     Post.findAll({
//         include: [
//             {
//                 model: User
//             }
//         ]
//     }).then((posts) => {
//         console.log(posts);
//         posts = posts.map((post) => post.get({plain: true}));
//         res.render('homepage', { posts })
//     })
// })


// Get route for finding all Posts and rendering to page
router.get('/', async (req, res) => {
    const postData = await Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'created_at',
        ],
        include: [{
            model: Comment,
            attributes: ['id', 'text', 'user_id', "post_id" ],
            include: {
                model: User,
                attributes: ['username']
            }
        }]
    })
    .then(postData => {
        const posts = postData.map(post => post.get({ plain: true}));
        console.log(posts);
        res.render('homepage', { posts, loggedIn: req.session.loggedIn})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



// LOGIN 
// If login is clicked, redirect to login
// Otherwise, if logged in, redirect home

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login')
});




// Route to view single post 
// This will be when a user clicks on a post on the home page

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'content',
            'date_created',
        ],
        include: [{
            model: Comment,
            attributes: ['id', 'text', 'user_id', 'post_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        }]
    })
    .then(postData => {
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        const post = postData.get({ plain: true });
        console.log(post);
        res.render('post', { post, loggedIn: req.session.loggedIn})
    })

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
 
})











module.exports = router;


