const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favoriteGenres: [{
        type: String,
        enum: ['Adventure/Fantasy', 'Fiction', 'Nonfiction', 'Young Adult', 'Personal Development', 'Mystery/Thriller', 'Biography/Memoir', 'Children and Toddlers']
    }],
    ageRange: {
        type: String,
        enum: ['0-10', '11-18', '18+']
    }
})

module.exports = mongoose.model('User', userSchema);