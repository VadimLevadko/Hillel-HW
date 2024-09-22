'use strict';

const insertWordInto = (str) => {
  // 0 - початок, 1 - середина, 2 - кінець
  let usedIndexArr = [];

  return function (word) {
    const result = str.split('');
    let index = 0;

    const getRandomUniqueNumber = () => {
      if (usedIndexArr.length === 3) {
        usedIndexArr = [];
        return;
      }
      const randomIndex = Math.floor(Math.random() * 3);

      if (!usedIndexArr.includes(randomIndex)) {
        index = randomIndex;
        usedIndexArr.push(randomIndex);
      } else {
        getRandomUniqueNumber();
      }
    };
    getRandomUniqueNumber();

    if (index === 0) {
      result.unshift(`${word} `);
    } else if (index === 1) {
      const averageLength = str.length / 2;
      const indexOfSpace = result.indexOf(' ', averageLength);
      result.splice(indexOfSpace, 1, ` ${word} `);
    } else if (index === 2) {
      result.push(` ${word} `);
    }

    return result.join('');
  };
};

const insert = insertWordInto('hello world');
const result = insert('Odesa');
const secondResult = insert('Odesa');
const thirdResult = insert('Odesa');
const fourthResult = insert('Odesa');

console.log(result);
console.log(secondResult);
console.log(thirdResult);
console.log(fourthResult);
