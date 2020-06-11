function swap(var1, var2) {
    var var3 = var2;
    var2 = var1;
    var1 = var3;
    return (var1, var2);
}

console.log(swap(25,30));