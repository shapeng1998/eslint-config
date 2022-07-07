// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: [
    '@shapeng1998/eslint-config-react',
    '@shapeng1998/eslint-config-vue',
    'plugin:prettier/recommended',
  ],
})
