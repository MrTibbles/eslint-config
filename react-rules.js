module.exports = {
  'extends': [
    '@raddad/eslint-config',
    'plugin:react/recommended'
  ],
  'rules': {
    "jsx-quotes": ["error", "prefer-double"],
    "react/display-name": "off",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-danger": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "warn",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-unknown-property": "error",
    "react/no-render-return-value": "error",
    "react/prop-types": "warn",
    "react/react-in-jsx-scope": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "plugins": ["react", "react-hooks"],
  "settings": {
    "react": {
      "pragma": "React",
      "version": "16.0"
    }
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
