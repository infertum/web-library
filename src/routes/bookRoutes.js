var express = require('express');
var bookRouter = express.Router();

var router = function(nav){
        var books = [
        {
            'title': 'Book1',
            'genre': 'Ganre1',
            'author': 'Author1',
            'read': true
        },
        {
            'title': 'Book2',
            'genre': 'Ganre2',
            'author': 'Author2',
            'read': false
        },
            {
            'title': 'Book3',
            'genre': 'Ganr3',
            'author': 'Author3',
            'read': false
        }];

    bookRouter.route('/')
        .get(function(req, res){
            res.render('bookListView', {
            title: 'Books',
            nav: nav,
            books: books
            });
        });

    bookRouter.route('/:id')
        .get(function(req, res){
            var id = req.params.id;
            console.log('ID:', req.params.id)
            console.log('ID:', books[id].title)
            res.render('bookView', {
                title: 'Book Info',
                nav: nav,
                book: books[id]
            });
        });

        return bookRouter;
}

module.exports = router;