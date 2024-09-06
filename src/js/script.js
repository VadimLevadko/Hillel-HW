'use strict';

const someArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const result = {
  sum: 0,
  countNegativeNum: 0,
  oddNum: {
    count: 0,
    sum: 0,
  },
  pairedNum: {
    count: 0,
    sum: 0,
  },
  productOfPositiveEl: 1,
};

const filteredArr = someArr.filter((item) => {
  if (item > 0) {
    result.sum += item;

    if (item % 2 !== 0) {
      result.oddNum.count++;
      result.pairedNum.sum += item;
    } else {
      result.pairedNum.count++;
      result.oddNum.sum += item;
    }

    result.productOfPositiveEl *= item;

    return true;
  }
  result.countNegativeNum++;

  return false;
});

console.log(filteredArr);

console.log(`Довжина масиву - ${filteredArr.length}. Сума всіх позитивних чисел - ${result.sum}`);

const minNumber = Math.min(...someArr);
console.log(`Мінімальний елемент в масиві: ${minNumber}, його Index - ${someArr.indexOf(minNumber)}`);

const maxNumber = Math.max(...someArr);
console.log(`Максимальний елемент в масиві: ${maxNumber}, його Index - ${someArr.indexOf(maxNumber)}`);

console.log(`Кількість негативних чисел в масиві: ${result.countNegativeNum}`);

console.log(`Кількість непарних позитивних елементів: ${result.oddNum.count}`);

console.log(`Кількість парних позитивних елементів: ${result.pairedNum.count}`);

console.log(`Cума парних позитивних елементів: ${result.pairedNum.sum}`);

console.log(`Cума непарних позитивних елементів: ${result.oddNum.sum}`);

console.log(`Добуток позитивних елементів: ${result.productOfPositiveEl}`);

someArr.forEach((el, index) => {
  if (el !== maxNumber) {
    someArr[index] = 0;
  }
});

console.log(someArr);
