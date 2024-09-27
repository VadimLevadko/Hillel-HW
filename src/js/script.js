'use strict';

const body = document.querySelector('body');
const PATH_IMAGE = './images/';

const generateImages = () => {
  const randomIndex = Math.floor(Math.random() * 9) + 1;

  const image = document.createElement('img');
  image.style.display = 'block';
  image.style.width = `${100}%`;
  image.src = `${PATH_IMAGE}${randomIndex}.jpg`;
  body.appendChild(image);
};

generateImages();
