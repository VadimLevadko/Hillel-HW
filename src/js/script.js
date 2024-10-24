'use strict';

(function () {
  const user = {
    data: {
      a: 1,
      b: 2,
      c: 3,
      d: {
        a1: 1,
        b1: 2,
        c1: 3,
        d1: {
          a2: 3,
          b2: 3,
          c2: 3,
        },
      },
    },
  };

  const deepFreeze = (obj) => {
    if (typeof obj !== 'object' || Array.isArray(obj)) throw new Error('Arguments must be object only');

    Object.freeze(obj);

    for (const key in obj) {
      if (typeof obj[key] === 'object') deepFreeze(obj[key]);
    }

    return obj;
  };
  deepFreeze(user);
}());
