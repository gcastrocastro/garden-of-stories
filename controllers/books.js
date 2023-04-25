const Book = require('../models/book');

function newBook (req, res) {
    res.render('books/new', {title: "Enter a new Book"});
}

async function index (req, res) {
    try {
        const allBooks = await Book.find({});
        res.render('books/index', {
            books: allBooks,
            title: 'All Books'
        })
    } catch (error){
        res.render('error', {title: 'Something Went Wrong'});
    }
}

async function create(req, res) {
    try {
        const book = await Book.create(req.body);
        res.redirect(`/books/${book._id}`);
    } catch (error){
        res.render('error', {title: 'Something went wrong'});
    }
}

async function show (req, res) {
    try {
        const foundBook = await Book.findById(req.params.id);
        res.render('books/show', { 
            book: foundBook, 
            title: 'See Book Details', 
        });
    }catch (error){
        res.render('error', {title: 'Something went wrong'});
    }
}

module.exports = {
    index,
    new: newBook,
    create,
    show
}