var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Requested URL: ' + req.url);
    next();
})

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person:' + req.params.id + '</h1></body></html>');
});

app.get('/api', function (req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);