var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}];

var arr2 = arr.map(function(person) {
    var name = person.firstName + ' ' + person.surname;
    var obj = {
        fullName: name
    };
    return obj;
});

console.log(arr2);