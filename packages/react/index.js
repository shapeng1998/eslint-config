module.exports = {
  plugins: [
    'jsx-a11y'
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    '@shapeng1998/eslint-config-ts'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
