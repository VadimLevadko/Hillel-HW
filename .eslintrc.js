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
    'no-console': 'off',
    strict: 'off',
    'max-len': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
  },
};
