const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /books --> index route
router.get('/', booksController.index);

//GET /search --> search for specific books
router.get('/search', booksController.search);

//GET /new -->  create new book view
router.get('/new', ensureLoggedIn, booksController.new);

//POST /books  --> create new book
router.post('/', ensureLoggedIn, booksController.create);

//GET /:id --> book show view
router.get('/:id', booksController.show);

module.exports = router;
