const Book = require('../models/book');

async function index (req, res) {
    try {
        const allBooks = Book.find({});
        res.render('books/index', {
            books: allBooks,
            title: 'All Books'
        })
    } catch (error){
        res.render('error', {title: 'Something Went Wrong'});
    }
}

module.exports = {
    index
}