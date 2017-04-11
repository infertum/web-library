var express = require('express');
var bookRouter = express.Router();

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
];

bookRouter.route('/')
    .get(function(req, res){
        res.render('bookListView', {
        title: 'Books',
        nav: [
            {
                Link: '/books',
                Text: 'Books'
            }, 
            {
                Link: '/authors',
                Text: 'authors'
            }
            ],
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
            nav: [
                {
                    Link: '/books',
                    Text: 'Books'
                }, 
                {
                    Link: '/authors',
                    Text: 'authors'
                }
                ],
            book: books[id]
        });
    });

module.exports = bookRouter;