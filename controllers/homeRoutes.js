
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


router.get('/', async (req, res) => {
    const postData = await Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'date_created',
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
        res.render('homepage', { possts, loggedIn: req.session.loggedIn})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
















module.exports = router;


