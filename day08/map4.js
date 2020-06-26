var arr = [1, 2, 3, 4];
var arr2 = arr.map(function(isEven) {
    if (isEven % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

console.log(arr2);