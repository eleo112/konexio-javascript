function letterCapitalizeRegex(str) {
    // var str = "what a wonderful world"
    var result = str.replace(/w/gi, "W");

    return result;
}

console.log(letterCapitalizeRegex('what a wonderful world'));