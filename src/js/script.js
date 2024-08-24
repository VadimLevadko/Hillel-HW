const someString = prompt('Введіть щось у текстове поле нижче для продовження');
const stringLength = +prompt('Введіть довжину рядка для подальшої обробки');
const strSymbol = prompt('Введіть символ для продовження');
const isTrue = confirm('Введіть, з якої сторони доповнювати символи: \n Ok - ліворуч \n Отмена - праворуч');

function padString(str, strLength, symbol, rightOrLeft = false) {
  if (!str) return 'Помилка! Схоже, що ви нічого не ввели в текстове поле!';
  if (strLength <= 0 || Number.isNaN(strLength)) return 'Помилка! Схоже, ви ввели довжину 0 або негативне число, або ж ввели щось крім числа. Будь ласка, введіть коректне числове значення';
  if (!symbol || symbol.length > 1) return 'Помилка! Схоже, що ви нічого не ввели в поле для символа! (Допустима кількість символів - 1)';
  if (strLength < str.length) return str.substring(0, strLength);

  let result = '';

  for (let i = str.length; i < strLength; i++) {
    result += symbol;
  }

  return rightOrLeft ? result + str : str + result;
}

const result = padString(someString, stringLength, strSymbol, isTrue);

console.log(result);
