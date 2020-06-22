function isEven(num) {
    var result = num / 2;
    if (Number.isInteger(result) === true) {
        return true;
    } else {
        return false;
    }
}


// function isEven(num) {
    // var result = num / 2;
    // var comparatore = parseInt(num / 2);
    // console.log(comparatore);
    // if (result === comparatore) {
        // return true;
    // } else {
        // return false;
    // }
// }


// function isEven(num) {
    // if (num % 2 === 0) {
        // return true;
    // } else {
        // return false;
    // }
// }


// function isEven(num) {
    // var result = num % 2 === 0;
    // return result;
// }

console.log(isEven(68));
console.log(isEven(5));
console.log(isEven(994));
console.log(isEven(7));