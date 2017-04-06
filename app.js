//import modules
var express = require('express');

//create express app
var app = express();
var port = 5000;

//Define static content
app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/',(req,res)=>{
    res.send('Hello world!');
});










app.listen(port, (err)=>{
    console.log('Application started on port: ' + port);
});