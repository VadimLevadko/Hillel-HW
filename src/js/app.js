'use strict';

// eslint-disable-next-line import/extensions
import { getContentForm, generateList } from './form.js';
// eslint-disable-next-line import/extensions
import { getFullData } from './localStorage.js';

(function () {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', getContentForm);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const currentData = getFullData();

    if (currentData === null) return;

    const storageItems = JSON.parse(currentData);

    storageItems.forEach((element) => {
      generateList(element);
    });
  });
}());
