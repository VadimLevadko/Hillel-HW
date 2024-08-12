'use strict';

let firstNum = +prompt('What is the first number?');

while(firstNum <= -1 || isNaN(firstNum)) {
    firstNum = +prompt('Error! What is the first number?');
}

let secondNum = +prompt('What is the second number?');

while(secondNum <= -1 || isNaN(secondNum)) {
    secondNum = +prompt('Error! What is the second number?');
}

let thirdNum = +prompt('What is the third number?');

while(thirdNum <= -1 || isNaN(thirdNum)) {
    thirdNum = +prompt('Error! What is the third number?');
}

alert(`Arithmetic mean of the numbers: ${firstNum}, ${secondNum} and ${thirdNum} = ${((firstNum + secondNum + thirdNum) / 3).toFixed(1)}`);