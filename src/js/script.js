// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

let resulFirstTask = '';

for (let i = 10; i <= 20; i++) {
  resulFirstTask += i;

  if (i < 20) {
    resulFirstTask += ', ';
  }
}

alert(resulFirstTask);

// ---------------------------------------------------------

// 2. Вивести квадрати чисел від 10 до 20.

// let resultSecondTask = '';
//
// for (let i = 10; i <= 20; i++) {
//   resultSecondTask += i * i;
//
//   if (i < 20) {
//     resultSecondTask += ', ';
//   }
// }
//
// alert(resultSecondTask);

// ---------------------------------------------------------

// 3. Вивести таблицю множення на 7.

// let resultThirdTask = '';
//
// for (let i = 1; i <= 10; i++) {
//   resultThirdTask += `7 * ${i} = ${7 * i} \n`;
// }
//
// alert(resultThirdTask);

// ---------------------------------------------------------

// 4. Знайти суму всіх цілих чисел від 1 до 15.

// let resultFourTask = 0;
//
// for (let i = 1; i <= 15; i++) {
//   resultFourTask += i;
// }
//
// alert(resultFourTask);

// ---------------------------------------------------------

// 5. Знайти добуток усіх цілих чисел від 15 до 35.

// let resultFiveTask = 1;
//
// for (let i = 15; i <= 35; i++) {
//   resultFiveTask *= i;
// }
//
// alert(resultFiveTask);

// ---------------------------------------------------------

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

// let resultSixTask = 0;
//
// for (let i = 1; i <= 500; i++) {
//   resultSixTask += i;
// }
//
// alert(resultSixTask / 500);

// ---------------------------------------------------------

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

// let resultSevenTask = 0;
//
// for (let i = 30; i <= 80; i++) {
//   if (i % 2 === 0) {
//     resultSevenTask += i;
//   }
// }
//
// alert(resultSevenTask);

// ---------------------------------------------------------

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

// let resultEightTask = '';
//
// for (let i = 100; i <= 200; i++) {
//   if (i % 3 === 0) {
//     resultEightTask += `${i} `;
//   }
// }
//
// alert(resultEightTask);

// ---------------------------------------------------------

/*
  9. Визначити кількість його парних дільників.
  10. Визначити кількість його парних дільників.
  11. Знайти суму його парних дільників.
*/

// const number = 48;
//
// let resultNineTask = '';
//
// let numberDivisors = 0;
//
// let numberSum = 0;
//
// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     resultNineTask += `${i} `;
//     numberDivisors++;
//     numberSum += i;
//   }
// }
//
// alert(`Всі дільники числа ${number}: ${resultNineTask}`);
// alert(`Кількість парних дільників числа ${number} = ${numberDivisors}.`);
// alert(`Сума парних дільників числа ${number} = ${numberSum}`);

// ---------------------------------------------------------

// 12. Надрукувати повну таблицю множення від 1 до 10.

// let resultTable = '';
//
// const separator = '-------------------------';
//
// for (let i = 1; i <= 10; i++) {
//   let result = `${separator} \n`;
//
//   for (let j = 1; j <= 10; j++) {
//     result += `${i} * ${j} = ${i * j} \n`;
//   }
//
//   resultTable += result;
// }
//
// console.log(resultTable);
