'use strict';

const body = document.querySelector('body');
const PATH_IMAGE = './images/';

const getRandomUniqueNumber = () => {
  const usedIndexArr = [];

  return function generateRandomUniqueNumber() {
    const randomIndex = Math.floor(Math.random() * 9) + 1;

    if (!usedIndexArr.includes(randomIndex)) {
      usedIndexArr.push(randomIndex);
      return randomIndex;
    }
    return generateRandomUniqueNumber();
  };
};

const generateImages = () => {
  const getIndex = getRandomUniqueNumber();

  for (let i = 0; i < 9; i++) {
    const imageIndex = getIndex();
    const image = document.createElement('img');
    image.style.display = 'block';
    image.style.width = `${100}%`;
    image.src = `${PATH_IMAGE}${imageIndex}.jpg`;
    body.appendChild(image);
  }
};

generateImages();
