function isEven(num) {
    console.log('num', num);
    return num % 2 === 0;
}

// console.log(isEven(68));
// console.log(isEven(5));
// console.log(isEven(994));
// console.log(isEven(7));

console.log(isEven(process.argv));