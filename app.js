var express = require('express');

var app = express();


var port = process.env.port ;


app.use(express.static('public'));


app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {
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
