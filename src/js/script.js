const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, symbols) {
  let keyResult = '';

  for (let i = 0; i < length; i++) {
    keyResult += symbols[Math.floor(Math.random() * symbols.length)];
  }

  return keyResult;
}

const key = generateKey(16, characters);

console.log(key);
