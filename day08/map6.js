var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]

var arr2 = arr.map(function(person) {
    return person.firstName + ' ' + person.surname;
});

console.log(arr2);