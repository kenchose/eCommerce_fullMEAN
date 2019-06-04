const mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

let UserSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:[true, "First name is required."]
    },
    last_name:{
        type:String,
        required:[true, "Last name is required."]
    },
    email:{
        type:String,
        required:[true, "Email is required."],
        unique: [true, 'This email is already registered'], //the unique option for schemas is not a validator.
        validator: [{
            validator: value => {
                return emailRegex.test(value);
            }, msg:'Email must be a real email.'
        }]
    },
    password:{
        type:String,
        required:[true, "Password is required."],
        validate: [{
            validator: (value) => {
                return passwordRegex.test( value );
            }, msg: 'Minimum eight characters, at least one letter, one number and one special character.'
        }]
    },
    password_confirmation:{
        type:String,
        required:[true, "Password confirmation is required."],
        // validate: [{
        //     validator: (value) => {
        //         return value == this.password;
        //     }, msg:'Password and password confirmation do not match.'
        // }]
    }
})


mongoose.model('User', UserSchema);
UserSchema.plugin(uniqueValidator, {msg:'Sorry, that email is already taken'});
