module.exports = {
  plugins: ['jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    '@shapeng1998/eslint-config-ts'
  ],
  settings: {
    react: {
      version: '18.0.0'
    }
  },
  rules: {
    // Use tsx instead of jsx
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off'
  }
}
