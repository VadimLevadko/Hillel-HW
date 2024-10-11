'use strict';

(function () {
  const appendElement = (parentElement, elementToAppend) => {
    if (!parentElement || !elementToAppend) throw new Error('one of the arguments was missed, the function takes only 2 arguments');
    parentElement.append(elementToAppend);
  };

  const generateList = (listContent) => {
    if (!listContent || !Array.isArray(listContent)) throw new Error('ListContent must be an array');
    if (listContent.length === 0) throw new Error('ListContent must be at least one element');

    const ul = document.createElement('ul');

    listContent.forEach((element) => {
      const li = document.createElement('li');

      if (Array.isArray(element)) {
        appendElement(li, generateList(element));
      } else {
        li.innerHTML = element;
      }

      appendElement(ul, li);
    });

    return ul;
  };

  const result = generateList([1, 2, [1.1, 1.2, 1.3], 3]);
  appendElement(document.body, result);
}());
