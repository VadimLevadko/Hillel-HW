'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = function (arr, num) {
  const result = [];

  for (const i of arr) {
    if (i !== num) {
      result.push(i);
    }
  }

  return result;
};

const resultRemoveElement = removeElement(array, 5);

console.log(resultRemoveElement);
