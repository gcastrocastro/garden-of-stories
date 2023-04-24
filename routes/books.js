const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

// GET /books --> index route
router.get('/', booksController.index);

//GET /new -->  new book view route
router.get('/new', booksController.new);

//POST /books  --> create new book
router.post('/', booksController.create);

module.exports = router;
