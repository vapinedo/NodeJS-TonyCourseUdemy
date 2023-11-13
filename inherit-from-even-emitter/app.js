var EventEmitter = require('node:events');
var util = require('node:util');

function Greetr() {
    EventEmitter.call(this);
    this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
    console.log(this.greeting + ' ' + data);
    this.emit('greet', data);
}

var greet1 = new Greetr();
greet1.on('greet', (data) => console.log('Someone has greeted', data));
greet1.greet('Valp');