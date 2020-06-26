fucntion dashInsert(str) {
    var split = str.split('');
    for (var i = 0; i < split.length; i++) {
        console.log(split[i]);
        console.log(split[i + 1]);
        if (Number(split[i]) % 2 === 1 && Number(split[i+1]) % 2 === 1) {
            split.splice(i + 1, 0, '-');
        }
    } 
var result = split.join('');
return result;
}

 console.log(dashInsert('99946'));