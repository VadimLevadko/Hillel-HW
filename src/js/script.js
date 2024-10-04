'use strict';

const body = document.querySelector('body');
const PATH_IMAGE = './images/';

const createElement = (element = null) => {
  if (typeof element !== 'string') return;
  return document.createElement(element);
};

const appendElementToHTML = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.appendChild(elementToAppend);
};

const generateRandomIndex = (startNum = null, endNum = null) => {
  if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) return;
  return Math.floor(Math.random() * endNum) + startNum;
};

const generateImages = () => {
  const index = generateRandomIndex(1, 9);

  const image = createElement('img');
  image.style.display = 'block';
  image.style.width = `${100}%`;
  image.src = `${PATH_IMAGE}${index}.jpg`;

  appendElementToHTML(body, image);
};

generateImages();
