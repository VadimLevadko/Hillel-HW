'use strict';

(function () {
  const user = {
    _name: 'Alex',
    _age: 21,

    get name() {
      return this._name;
    },
    set name(value) {
      if (typeof value !== 'string') throw new Error('name must be a string');
      const trimmedValue = value.trim();
      if (trimmedValue.length === 0) throw new Error('name cannot be empty');

      this._name = trimmedValue;
    },
    get age() {
      return this._age;
    },
    set age(value) {
      if (!Number.isInteger(value)) throw new Error('Age must be typeof number and integer');
      if (value < 0 || value > 120) throw new Error('Age must be a positive integer or not exceed 120');

      this._age = value;
    },
  };

  console.log(user);
}());
