var _ = require('lodash');

var list = ['Algérie', 'Erithrée', 'Italie'];

var result = _.map(list, function(el, index) {
    var num = (index + 1);
    return num + '. '+ el;
});

console.log(result);