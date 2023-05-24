module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'consistent-return': 'off',
  },
};
