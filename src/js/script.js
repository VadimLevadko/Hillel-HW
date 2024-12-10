'use strict';

import { form, inputId } from './config.js';
import formValidation from './formValidation.js';
import formHandler from './formHandler.js';

(function () {
  inputId.addEventListener('input', formValidation);
  form.addEventListener('submit', formHandler);
}());
