const { overrides } = require('@shapeng1998/eslint-config-base')

module.exports = {
  extends: [
    '@shapeng1998/eslint-config-base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides,
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/consistent-type-imports': 1
  }
}
