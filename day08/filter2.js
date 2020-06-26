var arr = ['a', 'b', 'a', 'c', 'a', 'd'];

var arr2 = arr.filter(function(elem) {
    var arr3 = elem.slice(1, 3, 5);
    return elem;

});

console.log(arr2);