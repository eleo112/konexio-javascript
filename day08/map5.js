var arr = ['pan', 'top', 'pal', 'tool'];
var arr2 = arr.map(function(word) {
    var arr3 = word.split('');
    var newArr = arr3.reverse();
    var reversedWord = newArr.join('');
    return reversedWord;
    // return word.split('').reverse().join.('');
})

console.log(arr2);