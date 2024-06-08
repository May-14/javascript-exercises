const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS"
    }
    let fibonacciSequence = [0];
    let lastNumber = 0;
    let secondToLastNumber = 1;
    for (let i = 0; i < number + 1; i++) {
        let newNumber = secondToLastNumber + lastNumber;
        fibonacciSequence.push(newNumber);
        secondToLastNumber = lastNumber;
        lastNumber = newNumber;
    }
    return fibonacciSequence[number]
};

// Do not edit below this line
module.exports = fibonacci;
