'use strict';

let hours = +prompt('Введіть кількість годин');

while(hours <= 0 || isNaN(hours)) {
    hours = +prompt('Введить правильну кількість годин!');
}

const hoursToSeconds = hours * 60 * 60

alert(`В ${hours} год. - ${hoursToSeconds} секунд.`);