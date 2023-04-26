const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST new review
router.post('/books/:id/reviews', ensureLoggedIn, reviewsController.create);

// DELETE review
router.delete('/books/:id/reviews/:id', ensureLoggedIn, reviewsController.delete);

module.exports = router;