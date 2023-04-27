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
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String,
    editing: {
        type: Boolean,
        default: false
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
        enum: ['Adventure/Fantasy', 'Fiction', 'Nonfiction', 'Young Adult', 'Personal Development', 'Mystery/Thriller', 'Biography/Memoir', 'Children and Toddlers'],
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