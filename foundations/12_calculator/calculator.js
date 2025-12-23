const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(arr) {
  let total = 0;
  arr.forEach(element => {
    total = total + element;
  });
  return total;
};

const multiply = function(arr) {
  return arr.reduce((multiply, current) => multiply * current )
};

const power = function(base, exponent) {
	return (base ** exponent);
};

const factorial = function(num) {
  let total = 1
	for (i = num; i > 0; i--) {
    total = total * i
  }
  return total;
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
