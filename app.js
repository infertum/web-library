var express = require('express');

var app = express();
var port = process.env.port ;
var books = [
    {
        'title:': 'Book1',
        'genre': 'Ganre1',
        'author': 'Author1',
        'read': true
    },
    {
        'title:': 'Book2',
        'genre': 'Ganre2',
        'author': 'Author2',
        'read': false
    },
];



app.use(express.static('public'));
var bookRouter = express.Router();

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
            ]});
    });

bookRouter.route('/single')
    .get(function(req, res){
        res.send("hello single book");
    });


app.use('/books',bookRouter);





app.set('views', './src/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render('index', {
        title: 'My web library',
        nav: [
            {
                Link: '/books',
                Text: 'Books'
            }, 
            {
                Link: '/authors',
                Text: 'authors'
            }
            ]}
    );
});


app.listen(port, function() {
    console.log('Application started on port: ' + port);
});
