var sentence = 'what a wonderful world';
var arr = sentence.split('');
console.log('arr', arr);

for ( var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
        console.log('enter the condition');
        arr[i] = arr[i].toLowerCase();
    }
}
console.log(arr.join(''));