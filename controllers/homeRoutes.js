const sequelize = require('../config/connection');
const { Post, User, Comment} = require('../models');
const router = require('express').Router();



router.get('/', async (req, res) => {
    try {
        await res.render('./public/index.html')
    } catch (err) {
        res.status(500).json(err)
    }
})








module.exports = router;


