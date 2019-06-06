const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const database = require('./../config/mongoose');
let User = mongoose.model('User');

module.exports = {
    getAll: (req, res) => {
        User.find({}, (err, users) => {
            if(err) {
                res.json({msg:"Cannot get all users"});
            } else {
                res.json({msg:"Found all users", users});
            }
        })
    },

    register: (req, res) => {
        // let newUser = new User(req.body);
        // console.log(newUser);
        // req.check('password', "Password and password confirmation do not match").equals(req.body.password_confirmation);
        // bcrypt.genSalt(10, (err, salt) => { 
        //     if (err) {
        //         for(let key in err.errors){
        //             req.flash('registration', err.errors[key].message);
        //         }
        //         res.json({message:"Couldn't create salt", err})
        //     } else {
        //         bcrypt.hash(req.body.password, salt, (err, hash) => {
        //             newUser.password = hash
        //         });
        //     }
        // });
        // newUser.save((err, newUser) => {
        //     if (err) {
        //         res.json({msg:"Failed to register user.", err});
        //     } else {
        //         res.json({msg:"User successfully registered.", newUser})
        //     }
        // })
    },

    // login: (req, res) => {
    //     passport.authenticate('local', {
    //         successRedirect: '/dashboard',
    //         failureRedirect: '/users/login',
    //         failureFlash: true
    //     }), (req, res, next);
    // },

    login: (req, res) => {
        User.findOne({email: req.body.email},(err, user) => {
            if (!user) {
                res.json({msg:'This user is not registered'});
            } else {
                bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                    // if (isMatch) {[
                    //     req.session.user_id = user._id,
                    //     req.session.first_name = user.first_name,
                    //     req.session.last_name = user.last_name,
                    //     req.session.email = user.email,
                    //     req.session.login = true]
                    //     // req.session.save();
                    //     // console.log(util.inspect(req.session, {showHidden: false, depth: null}))
                    //     res.json({message:'User is now logged in', user});
                    if (isMatch) {
                        jwt.sign(user.toJSON(), database.secretKey, {expiresIn:'1h'}, (err, token) => { //Expected "payload" to be a plain object.
                            res.json({
                                msg:'User is now logged in', 
                                token:'JWT ' + token,
                                user: {
                                    id:user._id,
                                    first_name:user.first_name,
                                    email:user.email
                                }
                            });
                        });
                    } else {
                        res.json({msg:'Invalid email/password'})
                    }
                })
            }
        })
    }, 

    profile: (req, res) => {
        res.json({user:req.user});
    }
}