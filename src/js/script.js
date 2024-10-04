'use strict';

const input = document.querySelector('input');
const info = document.querySelector('.info');

input.addEventListener('focus', () => {
  info.style.display = 'block';
});
input.addEventListener('blur', () => {
  info.style.display = 'none';
});
