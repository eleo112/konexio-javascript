function vowelCount(str) {
    var str = str.toLowerCase();
    var arr = str.split('');
    var arrVowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    var result = 0;

    for (var i = 0; i < arrVowels.lenght; i++) {
        for (var j = 0; j < arr.lenght; j++) {
            if (arrVowels[i] == arr[j]) {
                var result = result++;
            }
        }
    }
    return result;
}

console.log(vowelCount('hello'));