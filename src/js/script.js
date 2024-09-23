'use strict';

const sumNum = () => {
  let result = 0;

  return function (num) {
    result += num;
    return result;
  };
};

const test = sumNum();
console.log(test(3));
console.log(test(5));
console.log(test(20));
