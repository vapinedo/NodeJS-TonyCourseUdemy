var http = require('node:http');
var fs = require('node:fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');