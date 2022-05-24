module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
      }
    }
  ],
  extends: ['plugin:vue/vue3-recommended', '@shapeng1998/eslint-config-ts']
}
