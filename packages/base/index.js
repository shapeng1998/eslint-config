/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  extends: ['standard'],
  ignorePatterns: [
    '*.min.*',
    'dist',
    'public',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'pnpm-workspace.yaml',
    'yarn.lock',
    '__snapshots__',
  ],
}
