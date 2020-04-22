module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  parserOptions: {
    ecmaVersion: 2019
  },
  rules: {
    eqeqeq: ['error', 'always'],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'no-console': 0,
    'no-irregular-whitespace': 'error',
    'no-var': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['block-like', 'function', 'return']
      }
    ],
    'prefer-const': 'error',
    'node/no-unpublished-require': 'warn',
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        version: '>=12.0.0',
        ignores: ['modules']
      }
    ],
    'node/no-missing-import': [
      'error',
      {
        tryExtensions: ['.js', '.ts']
      }
    ]
  }
};
