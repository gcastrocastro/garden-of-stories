const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');

// POST new review
router.post('/books/:id/reviews', reviewsController.create);

// DELETE review
router.delete('/books/:id/reviews/:id', reviewsController.delete);

module.exports = router;