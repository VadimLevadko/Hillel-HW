import { errorMessage, MAX_POST_ID } from './config.js';
import { hideMessage, replaceClassName, showMessage } from './commonFunc.js';

const form = document.querySelector('form');

(function initializationErrorTextContent() {
  const errorWrapper = form.querySelector('[data-id-finder-error]');

  errorWrapper.innerHTML = errorMessage;
}());

export default function formValidation(event) {
  const inputValue = +event.target.value;
  const inputWrapper = event.target.closest('[data-input-id-wrapper]');
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
}
