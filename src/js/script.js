'use strict';

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

const createOneDimensionalArray = (arr) => {
  const result = [];

  const checkAndCreate = (el) => {
    el.forEach((item) => {
      if (Array.isArray(item)) {
        return checkAndCreate(item);
      }
      return result.push(item);
    });
    return true;
  };
  checkAndCreate(arr);

  return result;
};

const flatPro = (...arr) => arr.reduce((acc, item) => {
  if (arr.length > 1) return new Error('Function accepts only 1 argument, too much arguments provided');
  if (Array.isArray(item)) {
    acc = createOneDimensionalArray(arr);
  }

  return acc;
}, [...arr]);

console.log(flatPro(complexArray));
