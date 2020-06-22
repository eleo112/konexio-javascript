function doop(int1, int2) {
    var int1 = parseInt(int1);
    var int2 = parseInt(int2);
    var result = null;

    if (int1 === undefined || int2 === undefined) {
        return "error";
    }

    switch(operator) {
        case "+":
        result = int1 + int2;
        break;
        case "-":
        result = int1 - int2;
        break;
        case "*":
        result = int1 * int2;
        break;
        case "/":
        result = int1 / int2;
        break;
    }
    
    if (result == null) {
        return "error";
    }
}

console.log(doop("5"+"2"));