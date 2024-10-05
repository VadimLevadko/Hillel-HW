'use strict';

const input = document.querySelector('[data-info-input]');
const infoMessage = 'lorem ipsum must be required';

const appendElement = (parentElement, elementToAppend) => {
  if (!parentElement && !elementToAppend) return;
  parentElement.appendChild(elementToAppend);
};

const createInfoDiv = (event) => {
  const infoDiv = document.createElement('div');
  const parentEl = event.target.parentElement;
  infoDiv.style.width = '200px';
  infoDiv.style.padding = '20px';
  infoDiv.style.background = 'gray';
  infoDiv.innerHTML = infoMessage;
  infoDiv.setAttribute('data-info-div', '');
  appendElement(parentEl, infoDiv);
};

const deleteInfoDiv = (event) => {
  const parentEl = event.target.parentElement;
  const infoDiv = parentEl.querySelector('[data-info-div]');
  infoDiv.remove();
};

input.addEventListener('focus', createInfoDiv);
input.addEventListener('blur', deleteInfoDiv);
