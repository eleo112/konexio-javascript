function letterCapitalize(sentence) {

    var arr = sentence.split(' ');
    console.log('arr', arr);

    for ( var i = 0; i < arr.length; i++) {
        var currentWord = arr[i];
        var firstLetter = currentWord.substring(0, 1);
        console.log('firstLetter', firstLetter);
        firstLetter = firstLetter.toUpperCase();
        var restWord = currentWord.substring(1);
        console.log('restWord', restWord);
        var fullWord = firstLetter + restWord;
        console.log('fullWord', fullWord);
        arr[i] = fullWord;
    }

    var finalStr = arr.join(' ');
    return finalStr;

}
var result = letterCapitalize('what a wonderful wordl');
console.log(result);