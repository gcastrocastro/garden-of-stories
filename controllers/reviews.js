const Book = require('../models/book');

async function create(req, res) {
    try{
        const foundBook = await Book.findById(req.params.id);
        // Add the user-centric info to req.body (the new review)
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        
        foundBook.reviews.push(req.body); 
        await foundBook.save();
        req.body.content = '';
        res.redirect(`/books/${foundBook._id}`);
    } catch(error){
        res.render('error', {title: 'Something went wrong'});
    }
}

async function deleteReview(req, res) {
  const foundBook = await Book.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  if (!foundBook) return res.redirect('/books');
  foundBook.reviews.remove(req.params.id);
  await foundBook.save();
  res.redirect(`/books/${foundBook._id}`);
}

module.exports = {
    create,
    delete: deleteReview
}