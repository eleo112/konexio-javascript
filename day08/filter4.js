var arr = [1, 2, 3, 4];

var arr2 = arr.filter(function(isEven) {
        return isEven % 2 === 0;
});

console.log(arr2);