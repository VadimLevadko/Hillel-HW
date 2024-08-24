const someString = prompt('Введіть щось');
const stringLength = +prompt('Введіть довжину рядка');
const strSymbol = prompt('Введіть символ');
const isTrue = confirm('Введіть з якої сторони доповнювати символи: \n Ok - ліворуч \n Отмена - праворуч');

function padString(str, strLength, symbol, rightOrLeft = false) {
  if (!str) return 'Помилка! Схоже що ви нічого не ввели в поле!';
  if (strLength <= 0 || Number.isNaN(strLength)) return 'Помилка! Схоже ви ввели довжину 0 або -число! Або ввели щось крім числа...';
  if (!symbol || symbol.length > 1) return 'Помилка! Схоже що ви нічого не ввели в поле для символа! (Допустима кількість символів - 1!)';
  if (strLength < str.length) return str.substring(0, strLength);

  let result = '';

  for (let i = str.length; i < strLength; i++) {
    result += symbol;
  }

  return rightOrLeft ? result + str : str + result;
}

const result = padString(someString, stringLength, strSymbol, isTrue);

console.log(result);
