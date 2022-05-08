const { overrides } = require('@shapeng1998/eslint-config-base')

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    '@shapeng1998/eslint-config-base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides,
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2]
  }
}