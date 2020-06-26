function squareRoot(num) {
    // var num = 81;
    var result = 0;

    for (var i = num; i > 0; i--) {
        var var1 = i*i;
        result = num / var1;
        }
        
    return result;
}

console.log(squareRoot(81));

