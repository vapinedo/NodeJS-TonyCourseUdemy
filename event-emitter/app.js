var EventEmitter = require('node:events');
var events = require('./config.js').events;

var emitter = new EventEmitter();
emitter.on(events.GREET, function () {
    console.log('Somewhere, someone said hello');
});
emitter.on(events.GREET, function () {
    console.log('A greeting ocurred!');
});

console.log('Hello!');
emitter.emit(events.GREET);