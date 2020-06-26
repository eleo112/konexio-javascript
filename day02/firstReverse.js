function firstReverse(str) {
    // var str = 'konexio';
    var arr = str.split('');
    // console.log(arr);
    var part = arr.reverse();
    // console.log(part);
    var word = part.join('');
    
    return word;
}

console.log(firstReverse('konexio'));