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
  "rules": {
    "eqeqeq": [
      "error",
      "always"
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "no-console": "off",
    "no-irregular-whitespace": "error",
    "no-var": "error",
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": ["block-like", "function", "return"]
      }
    ],
    "prefer-const": "error",
    "sort-keys": "warn",
    "sort-vars": [
      "warn",
      {
        "ignoreCase": true
      }
    ],
    "valid-jsdoc": "warn"
  }
}
