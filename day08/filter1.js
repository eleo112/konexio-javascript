var arr = ['a', 'b', 'a', 'c', 'a', 'd'];

var arr2 = arr.filter(function(el) {
    return el.slice(0, 2, 4);
});

console.log(arr2);