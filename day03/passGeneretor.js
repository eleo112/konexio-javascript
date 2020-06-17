function passGenerator(num) {
    var arr = ['A','B','C','D','E','F','G','H','I'];
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