function exOh(str) {
     var countX = 0;
     var countO = 0;
     var arr = str.split("");
    // console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            countX = countX + 1;
        } else if (arr[i] === 'o') {
            countO = countO +1;
        }
    }

    if (countX == countO) {
        return true;
    } else {
        return false;
    }
}

console.log(exOh('xooxxo'));
console.log(exOh('oxooxxo'));