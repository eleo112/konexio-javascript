function simpleAdding(num) {
    // var num = 4;
    var product = 1;

    for (var i = 1; i <= num; i++) {
        var product = product * i;
    }
    return product;
}

console.log(simpleAdding(4));