var express = require('express');

var nav = [{
                Link: '/books',
                Text: 'Books'
            }, 
            {
                Link: '/authors',
                Text: 'authors'
            }
            ];

var app = express();
var bookRouter = require('./src/routes/bookRoutes')(nav);
var port = process.env.port || 3000 ;



app.use(express.static('public'));
app.use('/books',bookRouter);

app.set('views', './src/views');
app.set('view engine', 'ejs');

//Index Page with some staff
app.get('/', function(req, res) {
    res.render('index', {
        title: 'My web library',
        nav: nav
        }
    );
});

app.listen(port, function() {
    console.log('Application started on port: ' + port);
});
