function sayHello(name, day) {
    console.log('name', name);
    console.log('day', day);
    console.log('Nice to meet you ' + name + ". It's good to see you " + day);
}

// sayHello('to my little friend');

// console.log(Object.keys(process));
// console.log(Array.isArray(process));
// console.log(Array.isArray(process.argv));

var firstName = process.argv;

// console.log(typeof firstName);
sayHello('Tony', 'today');
sayHello('Carole', 'now');

sayHello(process.argv[2], process.argv[3]);

var argv = process.argv.slice(2);
console.log('argv', argv);
sayHello(argv[0], argv[1]);