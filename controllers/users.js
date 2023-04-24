const User = require('../models/user');

function newUser(req, res) {
    res.render('users/new', {
        title: 'Enter a New User'
    });
}

async function create(req, res) {
    try {
        await User.create(req.body);
        res.redirect('/users/new');   
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something went wrong'});
    }
}

module.exports = {
    new: newUser,
    create
}
