'use strict';

const mainFunction = function (toExponentiation, toMultiply, toDivision, toModulo) {
  const firstNum = +prompt('What is the first number?');
  const secondNum = +prompt('What is the second number?');

  toExponentiation(firstNum, secondNum);
  toMultiply(firstNum, secondNum);
  toDivision(firstNum, secondNum);
  toModulo(firstNum, secondNum);
};

const exponentiation = function (num1, num2) {
  const result = num1 ** num2;

  alert(`${num1}^${num2} = ${result}`);
};

const multiply = function (num1, num2) {
  const result = num1 * num2;

  alert(`${num1} * ${num2} = ${result}`);
};

const division = function (num1, num2) {
  const result = num1 / num2;

  alert(`${num1} / ${num2} = ${result}`);
};

const modulo = function (num1, num2) {
  const result = num1 % num2;

  alert(`${num1} % ${num2} = ${result}`);
};

mainFunction(exponentiation, multiply, division, modulo);
