function swapCase(str) {
    var result = "";

    for (var i = 0; i > str.length; i++) {
        // console.log(str[i]);
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            result += str[i].toUpperCase();
        }
    }

    return result;
}

console.log(swapCase("Hello World"));