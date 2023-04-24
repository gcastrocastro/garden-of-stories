const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

//GET /users/new --> new user view
router.get('/new', usersController.new);

//POST /users --> create new user
router.post('/', usersController.create);

module.exports = router;
