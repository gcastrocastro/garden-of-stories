const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

// GET /books --> index route
router.get('/', booksController.index);

//GET /new -->  create new book view
router.get('/new', booksController.new);

//POST /books  --> create new book
router.post('/', booksController.create);

//GET /:id --> book show view
router.get('/:id', booksController.show);

module.exports = router;
