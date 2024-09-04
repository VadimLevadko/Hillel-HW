'use strict';

// const array = [1, 'hello', true, { name: 'John' }, null, 10, 20, 30];
//
// const onlyNumber = function (arr) {
//   let result = 0;
//   let operations = 0;
//
//   for (const item of arr) {
//     if (typeof item === 'number') {
//       console.log(item);
//       result += item;
//       operations += 1;
//     }
//   }
//
//   return result / operations;
// };
//
// const onlyNumberResult = onlyNumber(array);
//
// console.log(onlyNumberResult);

// ------------------------------------------------------------------------------------------

// const firstNum = +prompt('Введіть перше число');
// const operation = prompt('Введіть операцію може бути: +, -, *, /, %, ^ (ступінь )');
// const secondNum = +prompt('Введіть друге число');
//
// const doMath = function (x, mathOperation, y) {
//   switch (mathOperation) {
//     case '+':
//       return x + y;
//
//     case '-':
//       return x - y;
//
//     case '*':
//       return x * y;
//
//     case '/':
//       return x / y;
//
//     case '%':
//       return x % y;
//
//     case '^':
//       return x ** y;
//
//     default:
//       return 'Error';
//   }
// };
//
// const doMathResult = doMath(firstNum, operation, secondNum);
//
// console.log(doMathResult);

// ------------------------------------------------------------------------------------------

// const arrayList = function () {
//   const result = [];
//   const mainArrLength = +prompt('Введіть довжину основного масиву');
//
//   for (let i = 0; i < mainArrLength; i++) {
//     const secondaryArrLength = prompt('Введіть довжину дочірнього масиву');
//     const secondaryArr = [];
//
//     for (let j = 0; j < secondaryArrLength; j++) {
//       const value = prompt('Введіть значення для масиву');
//       secondaryArr.push(value);
//     }
//
//     result.push(secondaryArr);
//   }
//
//   return result;
// };
//
// const getListResult = arrayList();
//
// console.log(getListResult);

// ------------------------------------------------------------------------------------------

const deleteLetter = function (word, letters) {
  let result = '';

  for (let i = 0; i < word.length; i++) {
    let deleted = false;

    for (let j = 0; j < letters.length; j++) {
      if (deleted === true || word[i] === letters[j]) {
        deleted = true;
      } else {
        result += word[i];
        deleted = false;
        break;
      }
    }
  }

  return result;
};

const deleteLetterResult = deleteLetter('hello world', ['l', 'd']);

console.log(deleteLetterResult);

// ------------------------------------------------------------------------------------------
