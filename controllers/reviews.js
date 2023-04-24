const Book = require('../models/book');

async function create(req, res) {
    try{
        const foundBook = await Book.findById(req.params.id);
        foundBook.reviews.push(req.body); 
        await foundBook.save()
        res.redirect(`/books/${foundBook._id}`);
    } catch(error){
        res.render('error', {title: 'Something went wrong'});
    }
}

module.exports = {
    create
}