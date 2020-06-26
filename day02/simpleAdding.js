function simpleAdding(num) {
    // var num = 12;
    var sum = 0;

    for (var i = 1; i <= num; i++) {
        var sum = sum + i;
    }
    return sum;
}

console.log(simpleAdding(4));