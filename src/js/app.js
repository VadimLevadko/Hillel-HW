'use strict';

(function () {
  const forms = document.querySelectorAll('form');
  const toDoWrapper = document.querySelector('#todoItems');

  const prependElement = (parentEl, elementToAppend) => {
    if (!parentEl || !elementToAppend) throw new Error('One argument was missed');
    return parentEl.prepend(elementToAppend);
  };

  const deleteListItem = ({ target }) => {
    const listWrapper = target.parentElement.parentElement;
    return listWrapper.remove();
  };

  const resetForm = ({ target }) => target.reset();

  const generateList = ({ title, description }) => {
    const itemWrapper = document.createElement('div');
    itemWrapper.className = 'col-4';

    itemWrapper.innerHTML = `
         <div class="taskWrapper">
             <h3 class="taskHeading fw-bold">${title}</h3>
             <p class="taskDescription">${description}</p>
             <button class="btn btn-danger mt-1 px-3" type="button">Delete</button>
         </div>
    `;

    prependElement(toDoWrapper, itemWrapper);
    itemWrapper.querySelector('button').addEventListener('click', deleteListItem);
    return itemWrapper;
  };

  const getContentForm = (event) => {
    event.preventDefault();
    const inputs = Array.from(event.target.querySelectorAll('input, textarea'));

    const objectValuesInputs = inputs.reduce((acc, { name, value }) => {
      acc[name] = value;
      return acc;
    }, {});

    resetForm(event);
    return generateList(objectValuesInputs);
  };

  forms.forEach((form) => {
    form.addEventListener('submit', getContentForm);
  });
}());
