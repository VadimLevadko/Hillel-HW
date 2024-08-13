'use strict';

const userBirthday = +prompt('When is your birthday?');

if(!Boolean(userBirthday) || Number.isNaN(userBirthday) || userBirthday <= 0 ) {
  alert(`Шкода, що Ви не захотіли ввести свій(ю) дату народження`);
}

const userCity = prompt('Where do you live?');

if(!Boolean(userCity)) {
  alert(`Шкода, що Ви не захотіли ввести своє місто`);
}

const userFavoriteSport = prompt('Whats is your favorite sport?');

if(!Boolean(userFavoriteSport)) {
  alert(`Шкода, що Ви не захотіли ввести свій(ю) улюбденний вид спорту`);
}

const userAge = new Date().getFullYear() - userBirthday;

const cityData = {
  kyiv: {
    country: 'Ukraine',
    sports: {
      boxing: 'Oleksandr Usyk',
      football: 'Andriy Shevchenko',
      swimming: 'Yana Klochkova',
    }
  },
  london: {
    country: 'United Kingdom',
    sports: {
      boxing: 'Anthony Joshua',
      tennis: 'Andy Murray',
      athletics: 'Mo Farah',
    }
  },
  washington: {
    country: 'USA',
    sports: {
      boxing: 'Muhammad Ali',
      tennis: 'Serena Williams',
      athletics: 'Michael Phelps',
    }
  },
}

if(userCity === 'kyiv' || userCity === 'london' || userCity === 'washington') {

  const cityDataPath = cityData[userCity.toLowerCase()]

  alert(`
    Тобі - ${userAge} років.
    Ти живеш в столиці ${cityDataPath['country']}
    Круто! Хочеш стати ${cityDataPath['sports'][userFavoriteSport.toLowerCase()]}?
`)
} else {
  alert(`
    Тобі - ${userAge} років.
    Ти живеш у місті - ${userCity}
    Твій улюбленний вид спорту - ${userFavoriteSport}
  `)
}

