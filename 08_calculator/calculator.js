const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  return array.reduce((total, num) => total * num, 1);
};

const power = function(num1, num2) {
  let power = num1;
	for (let i = 0; i < num2 - 1; i++) {
    power = power * num1;
  }
  return power;
};

const factorial = function(num) {
  if (num < 1) {
    num = 1
  }
  let factorial = num;
	for (let i = num - 1; i !== 0; i = i -1) {
    factorial = factorial * i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
