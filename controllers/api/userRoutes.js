const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Get router for api/users
// Returning all users info minus password
router.get('/', (req, res) => {
    User.findAll({ 
        attributes: {exclude: ['[password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});