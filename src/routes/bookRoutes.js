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
        res.render('books', {
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

bookRouter.route('/single')
    .get(function(req, res){
        res.send("hello single book");
    });

module.exports = bookRouter;