function ageCalculator(date) {
    vare dateOfBirth = newDate(date);
    var dateNow = 2020;
    var result = 0;
    dateOfBirth = dateOfBirth.getFallYear();
    result = dateNow - dateOfBirth;
    return "L'age est de " + result;
}

console.log(ageCalculator(16-12-1994));