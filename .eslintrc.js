module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "class-methods-use-this": "off",
    "linebreak-style": "off",
    "no-console": "off",
    camelcase: "off",
    "consistent-return": "off",
    "no-confusing-arrow": "off",
    "object-curly-newline": "off",
    quotes: "off",
    "implicit-arrow-linebreak": "off",
    "comma-dangle": "off",
    "function-paren-newline": "off",
  },
};
