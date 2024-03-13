const convertToCelsius = function(numberToConvert) {
  return Math.round((numberToConvert - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(numberToConvert) {
  return Math.round((numberToConvert * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
