// let result = '';
//
// for (let i = 20; i <= 30; i += 0.5) {
//   result += `${i} `;
// }
//
// alert(result);

// ----------------------------------------------------

// const dollarValue = 27;
//
// for (let i = 10; i <= 100; i += 10) {
//   console.log(`${i}$ = ${i * dollarValue}грн.`);
// }

// ----------------------------------------------------

// const number = 58;
// let stringResult = '';
//
// for (let i = 1; i <= 100; i++) {
//   if (i * i <= number) {
//     stringResult += `${i}^2 = ${i * i} \n`;
//   }
// }
//
// console.log(stringResult);

// ----------------------------------------------------

// const number = 107;
//
// let isNumberNoSimple = false;
//
// for (let i = 2; i <= number - 1; i++) {
//   if (Number.isInteger(number / i)) {
//     isNumberNoSimple = true;
//     break;
//   }
// }
//
// alert(isNumberNoSimple ? `Число ${number} - НЕ просте` : `Число ${number} - просте`);

// ----------------------------------------------------

// const someNumber = 81;
//
// let isNumberFound = false;
//
// for (let i = 1; i <= someNumber; i++) {
//   if (3 ** i === someNumber) {
//     isNumberFound = true;
//     alert(`Число ${someNumber} можна отримати, звівши число 3 в ступінь ${i}`);
//     break;
//   }
// }
//
// if (isNumberFound === false) {
//   alert(`Помилка! Число ${someNumber} не можна отримати шляхом зведення 3 у ступінь.`);
// }
