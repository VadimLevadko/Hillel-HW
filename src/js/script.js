'use strict';

// eslint-disable-next-line import/extensions
import { API_POSTS, MAX_POST_ID, errorMessage } from './variables.js';

(function () {
  const form = document.querySelector('form');
  const inputId = document.querySelector('[data-form-input-id]');

  (function initializationErrorTextContent() {
    const errorWrapper = form.querySelector('[data-id-finder-error]');

    errorWrapper.innerHTML = errorMessage;
  }());

  const appendElement = (parent, elementToAppend) => parent.appendChild(elementToAppend);
  const showMessage = (element) => element.classList.add('d-none');
  const hideMessage = (element) => element.classList.remove('d-none');
  const replaceClassName = (element, oldClassName, newClassName) => (element.classList.contains(`${oldClassName}`) ? element.classList.replace(`${oldClassName}`, `${newClassName}`) : element.classList.add(`${newClassName}`));

  const formValidation = (inputValue) => {
    const inputWrapper = inputId.closest('[data-input-id-wrapper]');
    const errorWrapper = form.querySelector('[data-id-finder-error]');
    const btnSubmit = form.querySelector('[data-form-submit]');

    if (inputValue < 1 || inputValue > MAX_POST_ID) {
      btnSubmit.disabled = true;
      hideMessage(errorWrapper);
      return replaceClassName(inputWrapper, 'border-success', 'border-danger');
    }

    replaceClassName(inputWrapper, 'border-danger', 'border-success');
    showMessage(errorWrapper);
    btnSubmit.disabled = false;
  };

  inputId.addEventListener('input', (event) => {
    const inputValue = +event.target.value;
    formValidation(inputValue);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('click');
  });
}());
