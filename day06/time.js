function time(num) {
    
    var hour = Math.floor(num / 3600);
    var rest = num - (hour * 3600);
    var min = Math.floor(rest / 60);
    rest = rest - (min * 60);
    var result = hour + ":" + min + ":" + rest;

    return result;
}

console.log(time(5203));