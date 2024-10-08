'use strict';

(function () {
  const ul = document.querySelector('[data-custom]');

  const getListItems = (parent) => {
    if (!parent) throw new Error('You must hand over the parent');

    const items = parent.querySelectorAll('li');
    items.forEach((item) => {
      console.log(item);
    });
  };
  getListItems(ul);

  const getAttributesValue = (element) => {
    if (!element) throw new Error('You must pass the element in which you want to get the attributes');

    const data = element.dataset;
    const dataValue = [];
    const dataKeys = [];
    for (const item in data) {
      dataValue.push(data[item]);
      dataKeys.push(item);
    }
    console.log(dataValue);
    console.log(dataKeys);
  };
  getAttributesValue(ul);

  const changeLastItemContent = (el, content) => {
    if (typeof el !== 'object' || !el) throw new Error('You must hand over the parent');
    if (typeof content !== 'string' || !content) throw new Error('The "content" must be a string argument');
    el.lastElementChild.innerHTML = content;
  };
  changeLastItemContent(ul, 'Привіт, мене звуть Вадим');

  const addFirstItemDataAttribute = (parent, indexItem, attributeName, attributeContent) => {
    if (typeof parent !== 'object' || !parent) throw new Error('You must hand over the parent');
    if (typeof indexItem !== 'number') throw new Error('indexItem must be of type number');
    if (typeof attributeName !== 'string' || typeof attributeContent !== 'string') throw new Error('The "attributeName" and "attributeContent" must be a string argument');

    parent.children[indexItem].setAttribute(attributeName, attributeContent);
  };
  addFirstItemDataAttribute(ul, 0, 'data-my-name', 'Vadim');

  const removeAttribute = (el, nameAttribute) => {
    if (typeof el !== 'object' || !el) throw new Error('You must pass the element as an argument in which you want to remove the attribute');
    if (typeof nameAttribute !== 'string' || !nameAttribute) throw new Error('The "nameAttribute" must be a string argument');

    el.removeAttribute(nameAttribute);
  };
  removeAttribute(ul, 'data-dog-tail');
}());
