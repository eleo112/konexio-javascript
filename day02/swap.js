function swap(var1, var2) {
    return [var1, var2];
}

var var1 = 25;
var var2 = 30;
console.log(swap(var1, var2));



function swap1(var1, var2) {
    var var3 = var2;
    var2 = var1;
    var1 = var3;
    return (var1, var2);
}

console.log(swap1(25,30));