const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
let User = mongoose.model('User')
let user = require('./../controllers/users');
// const ensurAuthenticated = require('./autho.js');
const router = express.Router();

// module.exports =  {
    // router.get('/dashboard', ensurAuthenticated, (req, res) => {
    //     user.dashboard(req, res);
    // })
    router.post('/register', (req, res) => {
        user.register(req, res);
    })
    router.post('/login', (req, res) => {
        user.login(req, res);
    })
    router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res) => {
        user.profile(req, res);
    })
// }

module.exports = (router);