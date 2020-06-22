function firstFactorial(num) {
    // var result = num;
    for (var result = num; num > 1; num--) {
        result = result * num;
        console.log(result);
    }
    return result;
}

console.log(firstFactorial(4))