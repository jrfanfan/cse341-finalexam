const express = require('express');
const router = express.Router();
const {ensureAuth, ensureGuest} = require('../midleware/auth')
const mongoose = require('../models/userSchema');
const passport = require('../passport/passport')



router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login',
    })
});



module.exports = router;