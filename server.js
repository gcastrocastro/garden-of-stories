const express = require('express');
const logger = require('morgan');
const indexRoutes = require('./routes/index');
const bookRoutes = require('./routes/books');
const reviewRoutes = require('./routes/reviews');
const userRoutes = require('./routes/users');
const session = require('express-session');
const passport = require('passport');

//initialize express application
const app = express();

// configure application settings
app.set('view engine', 'ejs');

//expose environment variables
require('dotenv').config();
//require and execute database config code-- has to be placed after dotenv config 
require('./config/database'); 
require('./config/passport');

// mount middlware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false })); 
app.use(express.static('public'));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use('/', indexRoutes);
app.use('/', reviewRoutes);
app.use('/books', bookRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('app is listening on port: 3000');
})
