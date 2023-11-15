var fs = require('node:fs');
const { dirname } = require('node:path');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf-8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function (err, data) {
    console.log('error:', err);
    console.log(data);
});

console.log('Done!');