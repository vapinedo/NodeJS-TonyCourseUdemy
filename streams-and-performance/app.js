var http = require('node:http');
var fs = require('node:fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(res);
}).listen(1337, '127.0.0.1');