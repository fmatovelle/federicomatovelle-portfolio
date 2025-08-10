/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'eslint:recommended', 'prettier'],
  parserOptions: { ecmaVersion: 'latest' },
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'off',
  },
};
