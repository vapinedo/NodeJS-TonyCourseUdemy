var buf = new Buffer('Hello', 'utf-8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('coming');
console.log(buf.toString());