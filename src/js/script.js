'use strict';

const body = document.getElementsByTagName('body')[0];

const appendElementToHTML = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.appendChild(elementToAppend);
};

const createElement = (element = null) => {
  if (typeof element !== 'string') return;
  return document.createElement(element);
};

const generateColumnsAndRows = (table) => {
  if (!table) return;

  let currentValue = 1;

  return function (columnCount, rowCount) {
    for (let i = 0; i < columnCount; i++) {
      const tableTr = createElement('tr');
      for (let j = 0; j < rowCount; j++) {
        const td = createElement('td');
        td.innerHTML = currentValue;
        td.style.border = '1px solid black';
        currentValue++;
        appendElementToHTML(tableTr, td);
      }
      appendElementToHTML(table, tableTr);
    }
  };
};

const generateTable = (columnCount = null, rowCount = null) => {
  if (!Number.isInteger(columnCount) || !Number.isInteger(rowCount)) return;

  const table = createElement('table');
  table.style.border = '2px solid black';
  table.style.textAlign = 'center';
  table.style.width = '500px';
  table.style.height = '500px';

  const generateTableContent = generateColumnsAndRows(table);
  generateTableContent(columnCount, rowCount);

  appendElementToHTML(body, table);
};

generateTable(10, 10);
