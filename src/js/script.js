'use strict';

const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const apply = (func, context, ...args) => {
  let result = null;
  context.func = func;
  result = context.func(...args);
  delete context.func;
  return result;
};

const bind = (func, context, args = []) => function () {
  return apply(func, context, ...args);
};

const bindContext = bind(getFullName, user);
console.log(bindContext());
