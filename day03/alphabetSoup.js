function alphabetSoup(str) {
    // var str = 'konexio';
    var arr = str.split("");
    var sorted = arr.sort();
    var result = sorted.join('');

    return result;
}

console.log(alphabetSoup('konexio'));
console.log(alphabetSoup('hooplah'));