const dataParse = (data) => JSON.parse(data);
const saveToDoItemsToLocalStorage = (data) => localStorage.setItem('toDoItems', JSON.stringify(data));

export const getFullData = () => localStorage.getItem('toDoItems');

export const getLastDataIndex = () => {
  const allData = getFullData();

  if (allData === null || allData === '[]') {
    return 1;
  }

  const parsingData = dataParse(allData);
  return parsingData.at(-1).index + 1;
};

export const getDataItemByIndex = (index) => {
  if (index <= 0) throw new Error('Index should be greater than 0');

  const allData = dataParse(getFullData());

  return allData.find((element) => element.index === index);
};

export const setLocalStorage = (data) => {
  const storageData = getFullData();

  if (storageData === null) {
    saveToDoItemsToLocalStorage([data]);
    return;
  }

  const arrStorage = dataParse(storageData);

  if (Array.isArray(arrStorage)) {
    arrStorage.push(data);
    saveToDoItemsToLocalStorage(arrStorage);
  }
};

export const dataRemoveItem = (id) => {
  const arrData = dataParse(getFullData());

  const indexDelete = arrData.findIndex((item) => item.index === +id);

  arrData.splice(indexDelete, 1);

  saveToDoItemsToLocalStorage(arrData);
};
