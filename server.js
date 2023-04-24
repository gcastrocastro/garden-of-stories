const express = require('express');
const logger = require('morgan');
const indexRoutes = require('./routes/index');

//initialize express application
const app = express();

// configure application settings
app.set('view engine', 'ejs');

// mount middlware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false })); 
app.use(express.static('public'));

app.get('/', indexRoutes)

app.listen(3000, () => {
    console.log('app is listening on port: 3000');
})
