'use strict';

const body = document.getElementsByTagName('body')[0];

const createTable = (columnCount = 10, rowCount = 10) => {
  const table = document.createElement('table');
  table.style.border = '2px solid black';
  table.style.textAlign = 'center';
  table.style.width = '500px';
  table.style.height = '500px';
  let currentValue = 1;

  for (let i = 0; i < columnCount; i++) {
    const tableTr = document.createElement('tr');
    for (let j = 0; j < rowCount; j++) {
      const td = document.createElement('td');
      td.innerHTML = currentValue;
      td.style.border = '1px solid black';
      currentValue++;
      tableTr.appendChild(td);
    }
    table.appendChild(tableTr);
  }

  body.appendChild(table);
};

createTable();
