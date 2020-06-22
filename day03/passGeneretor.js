function passGenerator(num) {
    var arr = ['A','B','C','D','E','F','G','H','I','J','H','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var result = "";

    if (num < 6 || num > 15) {
        console.log('erreur');
    } else {
        for (var i = 0; i < num; i++) {
            var random = Math.floor(Math.random()*arr.length);
            var letter = arr[random];
            result = result + letter;
        }
    }

    return result;
}

console.log(passGenerator(9));