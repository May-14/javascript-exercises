const sumAll = function(num1, num2) {
    let totalSum = 0
    let numberToAdd = 1;
    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0 ) {
        return "ERROR"
    }
    if (num1 > num2) {
        numberToAdd = -1;
    }
    do {
        totalSum += num1;

        num1 += numberToAdd;
    } while (num1 -numberToAdd  !== num2);
    return totalSum
};

// Do not edit below this line
module.exports = sumAll;
