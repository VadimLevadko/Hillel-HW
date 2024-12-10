import { API } from './config.js';

export const appendElement = (parent, elementToAppend) => parent.appendChild(elementToAppend);

export const showMessage = (element) => element.classList.add('d-none');
export const hideMessage = (element) => element.classList.remove('d-none');

export const replaceClassName = (element, oldClassName, newClassName) => {
  if (element.classList.contains(`${oldClassName}`)) {
    return element.classList.replace(`${oldClassName}`, `${newClassName}`);
  }
  return element.classList.add(`${newClassName}`);
};

export const fetchData = async (path) => {
  const fetchUrl = `${API.global}/${path}`;
  console.log(fetchUrl);

  return fetch(fetchUrl)
    .then((response) => response.json());
};

export const fetchById = (data, postId) => data.find((post) => post.id === postId);
