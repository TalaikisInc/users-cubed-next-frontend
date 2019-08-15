module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'cypress/globals': true
  },
  'extends': [
    'standard',
    'plugin:security/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:compat/recommended',
    'plugin:cypress/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  "parser": "babel-eslint",
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'html',
    'security',
    'jsx-a11y',
    'json',
    'cypress'
  ],
  'rules': {
    'no-extend-native': [0, 'always'],
    'no-unused-vars': [0, 'always']
  }
}
