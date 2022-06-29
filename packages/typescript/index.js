/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@shapeng1998/eslint-config-base',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error'
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
}
