module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'airbnb'],
  parserOptions: {
    ecmaVersion: 15,
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 'off',
    'no-alert': 'off',
  },
};
