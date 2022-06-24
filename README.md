# @shapeng1998/eslint-config

[![npm](https://img.shields.io/npm/v/@shapeng1998/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@antfu/eslint-config)

## Usage

### Install

```bash
pnpm add -D eslint @shapeng1998/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@shapeng1998"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Credits

Big thanks to these amazing projects:

- [antfu/eslint-config](https://github.com/antfu/eslint-config)
- [eslint-config-standard](https://github.com/standard/eslint-config-standard)

## License

MIT
