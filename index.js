module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "plugins": [
    "import"
  ],
  rules: {
    'eqeqeq': ['error', 'always'],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'no-console': 'error',
    'no-unused-vars': 'error',
    'no-import-assign': 'error',
    'default-case': 'error',
    'no-irregular-whitespace': 'error',
    'no-var': 'error',
    'no-alert': 'error',
    'no-labels': 'error',
    'no-duplicate-imports': 'error',
    'prefer-const': 'error',
    'arrow-spacing': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['block-like', 'function', 'return']
      }
    ],
    'prefer-const': 'error',
    'valid-jsdoc': 'warn',
    'max-depth': ['error', 3],
    'complexity': ['error', 10],
    'max-lines-per-function': ['error', 100],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always'
      }
    ]
  }
}
