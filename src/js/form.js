// eslint-disable-next-line import/extensions
import { prependElement } from './commonFuntions.js';
import {
  setLocalStorage, getLastDataIndex, dataRemoveItem, getDataItemByIndex,
// eslint-disable-next-line import/extensions
} from './localStorage.js';
// eslint-disable-next-line import/extensions
import { editModalItem } from './popups.js';

const toDoWrapper = document.querySelector('#todoItems');

const getItemWrapper = (target) => target.closest('[data-todo-item-wrapper]');

const deleteListItem = ({ target }) => {
  const listWrapper = getItemWrapper(target);
  listWrapper.remove();

  dataRemoveItem(listWrapper.getAttribute('data-todo-item-index'));
};

const listItemSaveChanges = ({ target }) => {
  const modalWrapper = document.querySelector('#editModalItem');

  const inputs = Array.from(modalWrapper.querySelectorAll('input, textarea'));

  const newData = inputs.reduce((acc, { name, value }) => {
    acc[name] = value;

    return acc;
  }, {});

  console.log(newData);
};

const editListItem = ({ target }) => {
  const modalWrapper = document.querySelector('#editModalItem');
  const listWrapper = getItemWrapper(target);
  const itemContent = getDataItemByIndex(Number(listWrapper.getAttribute('data-todo-item-index')));
  modalWrapper.querySelector('[data-modal-title]').innerHTML = `Edit item #${itemContent.index}`;
  const inputs = modalWrapper.querySelectorAll('input, textarea');

  Object.keys(itemContent).forEach((key) => {
    inputs.forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      if (el.name === key) el.value = itemContent[key];
    });
  });

  editModalItem.show();

  modalWrapper.querySelector('[data-modal-btn-save]').addEventListener('click', listItemSaveChanges);
};

const resetForm = ({ target }) => target.reset();

export const generateList = ({ title, description, index }) => {
  const itemWrapper = document.createElement('div');
  itemWrapper.className = 'col-4';
  itemWrapper.setAttribute('data-todo-item-index', index);
  itemWrapper.setAttribute('data-todo-item-wrapper', '');

  itemWrapper.innerHTML = `
         <div class="taskWrapper">
             <h3 data-todo-item-title class="taskHeading fw-bold">#${index} | ${title}</h3>
             <p class="taskDescription">${description}</p>
             <div class="d-flex justify-content-between">
                <button data-todo-btn-delete class="btn btn-danger mt-1 px-3" type="button">Delete</button>
                <button data-todo-btn-edit type="button" class="btn btn-primary mt-1 px-3">Edit</button>
             </div>
         </div>
    `;

  prependElement(toDoWrapper, itemWrapper);
  itemWrapper.querySelector('[data-todo-btn-delete]').addEventListener('click', deleteListItem);
  itemWrapper.querySelector('[data-todo-btn-edit]').addEventListener('click', editListItem);
  return itemWrapper;
};

export const getContentForm = (event) => {
  event.preventDefault();
  const inputs = Array.from(event.target.querySelectorAll('input, textarea'));

  const objectValuesInputs = inputs.reduce((acc, { name, value }) => {
    const lastIndex = getLastDataIndex();

    acc[name] = value;
    acc.index = lastIndex;

    return acc;
  }, {});

  resetForm(event);
  setLocalStorage(objectValuesInputs);
  return generateList(objectValuesInputs);
};
