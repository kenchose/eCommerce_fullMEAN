const mongoose = require('mongoose');
const express = require('express');
const database = require('./mongoose.js');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = mongoose.model('User')
// const User = require('./../models/user');

module.exports = (passport) => {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt") //passing token by using auth-header
    opts.secretOrKey = database.secretKey;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log("This is the jwt payload ", jwt_payload);
        User.findById(jwt_payload._id, (err, user) => {
            if(err){
                return done(err, false);
            }
            if(user){
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}
// const LocalStrategy = require('passport-local').Strategy;
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const User = require('./../models/user.js');

// module.exports = (passport) => {
//     passport.use(
//         new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
//             //Match user
//             User.findOne({email: email})
//             .then(user => {
//                 if(!user){
//                     return done(null, false, {msg:"That email is not registered"});
//                     //Match password
//                     bcrypt.compare(password, user.password, (err, isMatch) => {
//                         if(err) throw err;
//                         if(isMatch) {
//                             return done(null, user)
//                         } else {
//                             return done(null, false, {msg:"Invalid email/password"})
//                         }
//                     });
//                 } 
//             })
//             .catch(err => console.log(err));
//         })
//     );
//     passport.serializeUser((user, done) => {
//         done(null, user.id);
//       });
      
//       passport.deserializeUser((id, done) => {
//         User.findById(id, (err, user) => {
//           done(err, user);
//         });
//       });
// }