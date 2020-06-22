function wordCount(str) {
    // var str = 'I love you 3000';
    arr = str.split(' ');
    // console.log(arr);
    var result = arr.length;
    // console.log(arr.length);

    return result;
}


console.log(wordCount('I love you 3000'));