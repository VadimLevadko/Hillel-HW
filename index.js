let firstNum = +prompt('What is the first number?');

while (firstNum <= -1 || Number.isNaN(firstNum)) {
  firstNum = +prompt('Error! What is the first number?');
}

let secondNum = +prompt('What i s the second number?');

while (secondNum <= -1 || Number.isNaN(secondNum)) {
  secondNum = +prompt('Error! What is the sec ond number?');
}

let thirdNum = +prompt('What is the third number?');

while (thirdNum <= -1 || Number.isNaN(thirdNum)) {
  thirdNum = +prompt('Error! What is the third number?');
}

alert(
  `Arithmetic mean of the numbers: ${firstNum}, ${secondNum} and ${thirdNum} = ${((firstNum + secondNum + thirdNum) / 3).toFixed(1)}`,
);
