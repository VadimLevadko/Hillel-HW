'use strict';

const product = {
  name: null,
  price: 0,
  quantity: 1,
};

Object.defineProperty(product, 'name', {
  get() {
    return this._name;
  },
  set(value) {
    if (typeof value !== 'string' || value.trim().length === 0) throw new Error('Value must be a string or not empty.');
    this._name = value.trim();
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(product, 'price', {
  get() {
    return this._price;
  },
  set(value) {
    if (typeof value !== 'number') throw new Error('Value must be a number.');
    if (value <= 0) throw new Error('Value must be a positive integer.');

    this._price = value;
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(product, 'totalValue', {
  get() {
    return this._price * this.quantity;
  },
  enumerable: true,
  configurable: false,
});
