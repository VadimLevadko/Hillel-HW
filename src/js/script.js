'use strict';

const arr = [];
const getLengthArr = +prompt('What is the length of your array?');

for (let i = 0; i < getLengthArr; i++) {
  const someValue = +prompt('Enter some value for array (ONLY NUMBERS!)');

  arr.push(someValue);
}
console.log(arr);

arr.sort((a, b) => a - b);
console.log(arr);

arr.splice(2, 3);
console.log(arr);
