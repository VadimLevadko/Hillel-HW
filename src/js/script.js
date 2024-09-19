'use strict';

// const getFactorial = (num) => {
//   if (num <= 0) return 1;
//
//   return num * getFactorial(num - 1);
// };
//
// console.log(getFactorial(5));

// -------------------------------------------------------------------

// const pow = (num, degree) => {
//   if (degree <= 0) return 1;
//
//   return num * pow(num, degree - 1);
// };
//
// console.log(pow(2, 3));

// -------------------------------------------------------------------

const sum = (a, b) => {
  if (b === 0) return a;

  return sum(a + 1, b - 1);
};

console.log(sum(9, 8));
