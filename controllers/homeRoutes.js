
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


router.get('/', (req, res) => {
    Post.findAll({
        include: [
            {
                model: User
            }
        ]
    }).then((posts) => {
        console.log(posts);
        posts = posts.map((post) => post.get({plain: true}));
        res.render('homepage', { posts })
    })
})







module.exports = router;


