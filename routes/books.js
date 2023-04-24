const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

// GET /books --> index route
router.get('/', booksController.index);

module.exports = router;