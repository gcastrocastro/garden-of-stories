const Book = require('../models/book');

async function home(req, res) {
    try {
    const allBooks = await Book.find({});


    // console.log(allBooks.length)
    res.render('index', {
        title: 'Garden of Stories', 
        numberOfBooks: allBooks.length
    });


} catch (error){
    res.render('error', {title: 'Something Went Wrong'});
}
 }
module.exports = {
    home
};