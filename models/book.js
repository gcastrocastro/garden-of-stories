const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5, 
        default: 5
    }
}, {timestamps: true})


const bookSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    ageRange: {
        type: String,
        enum: ['0-10', '11-18', '18+']
    },
    reviews: [reviewSchema]
}, {timestamps: true})

module.exports = mongoose.model('Book', bookSchema);