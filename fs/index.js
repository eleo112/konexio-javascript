var fs = require('fs');

// var fn = require('./example1');

// var _ = require('lodash');

// _.map([], function(){ return 'r';});

// console.log(_);
// console.log(fs);

// fs.readFile(/*file path*/, /*[otps]*/, /*cb function*/);
fs.readFile('./input.txt', 'utf8', function(err, fileContent) {
    // if (!err) {}
    if (err !== null) {
        console.log('Error while reading this file', err);
    } else {
        console.log(fileContent);
    }
});