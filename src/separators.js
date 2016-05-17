'use strict';

function buildHasComma(numArray) {
    var result = [];
    var resultNum = '';
    var k = 0;

    for (var i = numArray.length - 1; i >= 0; i--) {
        if (k % 3 === 0 && k != 0) {
            result.push(',');
        }
        result.push(numArray[i]);
        k++;
    }
    for (i = result.length - 1; i >= 0; i--) {
        resultNum += result[i];
    }

    return resultNum;
}


function thousands_separators(num) {
    var numString = num.toString();

    if (numString.indexOf('.') === -1) {
        var numArray = numString.split('');
        var resultNum = buildHasComma(numArray);

    }
    else {
        numArray = numString.split('.');
        var interArray = numArray[0].split('');

        resultNum = buildHasComma(interArray);
        resultNum += '.' + numArray[1];
    }

    return resultNum;
}

module.exports = thousands_separators;
