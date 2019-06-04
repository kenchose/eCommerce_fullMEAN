const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const flash = require('express-flash');
const passport = require('passport');
// const session = require('express-session');
const mongooseDatabase = require('./server/config/mongoose');
const expressValidator = require('express-validator');
const userRoutes = require('./server/config/routes');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());
// app.use(session({
//     secret: 'thisisasecret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {maxAge: 60000}
// }))

mongoose.connect(mongooseDatabase.database, { useCreateIndex: true, useNewUrlParser:true });
mongoose.connection.on('connected', () => {
    console.log("Connected to database " + mongooseDatabase.database);
});
mongoose.connection.on('error', (err) => {
    console.log("Database error " + err);
});

app.use('/users', userRoutes);

app.set('trust proxy', 1);

// CORS Middleware //
app.use(cors());

app.use(flash());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session()); //don't need express-session if using passport.session
require('./server/config/passport')(passport);

// Set Static Folder //
app.use(express.static(__dirname + '/dist/public'));


app.listen(8000, () => {
    console.log("Running on port 8000 eCommerce");
})