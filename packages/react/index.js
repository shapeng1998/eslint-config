module.exports = {
  plugins: ['import', 'react', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@shapeng1998/eslint-config-ts'
  ],
  settings: {
    react: {
      version: '18.0.0'
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts']
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    'import/no-anonymous-default-export': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image']
      }
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn'
  }
}
