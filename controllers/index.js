
function home(req, res) {
    res.render('index', {title: 'Garden of Stories'});
}

module.exports = {
    home
};