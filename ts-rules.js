module.exports = {
  extends: [
    '@raddad/eslint-config'
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "react/prop-types": 0,
    'camelcase': "off",
    "@typescript-eslint/camelcase": [
      "error",
      {
        allow: ["__iframe_url_override__", "__test_env__"],
        properties: "always"
      }
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "never"
      }
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-function-return-type": ["error"]
  }
};
