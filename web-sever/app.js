var http = require('node:http');
var fs = require('node:fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.html', 'utf-8');
    var message = 'Hello world...';
    html = html.replace('{message}', message);
    res.end(html);
}).listen(1337, '127.0.0.1');