// module.exports = {
//     ensureAuthenticated: (req, res, next) => {
//         if(req.isAuthenticated) {
//             return next();
//         }
//         req.flash('error_msg', 'Please log in to view this resource')
//         res.redirect('/users/login')
//     }
// }

//put file in routes folder
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const database = require('./mongoose.js')
const User = mongoose.model('User')
module.exports = function(req, res, next){
    const token = req.header('auth-token'); 
    if(!token) return res.json("No token, access denied!"); 
    try {
        const verified = jwt.verify(token, database.secretKey);
        req.user = verified;
        next();
    } catch (err){
        res.status(400).send("Invalid token!");
    }
}