const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
let user = require('./../controllers/users.js');
let User = mongoose.model('User')
// const ensurAuthenticated = require('./autho.js');
// const router = express.Router();

module.exports = (app) => {
    // router.get('/dashboard', ensurAuthenticated, (req, res) => {
    //     user.dashboard(req, res);
    // })
    app.post('/register', (req, res) => {
        user.register(req, res);
    })
    // router.post('/login', (req, res) => {
    //     user.login(req, res);
    // })
    // router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res) => {
    //     user.profile(req, res);
    // })
}

