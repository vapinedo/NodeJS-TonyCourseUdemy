const greet = require('./greet-1').greet;
greet();

var Greet3 = require('./greet-3');
var greet3Obj = new Greet3();
greet3Obj.greet();

var greet4 = require('./greet-4').greet;
greet4();