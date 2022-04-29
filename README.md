# @srclaunch/dx

[![Issues](https://img.shields.io/github/issues/srclaunch/dx?label=Issues)](https://github.com/srclaunch/dx/issues) [![Build](https://github.com/srclaunch/dx/actions/workflows/publish.yml/badge.svg)](https://github.com/srclaunch/dx/actions/workflows/publish.yml) [![npms.io (final)](https://img.shields.io/npms-io/final-score/@srclaunch/dx?label=NPMS%20Score)](https://npms.io/search?q=@srclaunch/dx)

Includes the following configuration and linters:

<!-- prettier-ignore -->
| Linter | Description |
|:-------|:------------|
| `eslint` | [ESLint](https://eslint.org/) is a JavaScript code quality tool that checks your code for errors, helps you write better code, and rewards you for writing it. |
| `prettier` | [Prettier](https://prettier.io/) is a tool to format your code according to a preset style. |
| `stylelint` | [Stylelint](https://stylelint.io/) is a tool to check your CSS, SCSS, and LESS files for style errors. |
| `commitlint` | [Commitlint](https://commitlint.js.org/) is a tool to enforce a consistent commit message format. |

<!-- prettier-ignore -->
| Configuration | Description  |
| -------| ------------------ |
| `typescript` | [TypeScript](https://www.typescriptlang.org/)  is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. |
| `jest` | [Jest](https://jestjs.io/) is a delightful JavaScript Testing Framework with a focus on simplicity. |
| `ava` | [AVA](https://github.com/avajs/ava) is a test runner for Node.js with a concise API, detailed error output, embrace of new language features and process isolation that lets you develop with confidence. |
| `standard-version` | [Standard Version](https://github.com/conventional-changelog/standard-version) is utility for versioning using semver and CHANGELOG generation powered by Conventional Commits. |

## Instructions

### Installation

With [npm](https://nodejs.org/en/):

    `npm install --save-dev @srclaunch/dx`

Or with [yarn](https://yarnpkg.com/en/docs/install):

    `yarn add @srclaunch/dx -D`

The VSCode extension loads the configuration file using CJS `require`, so we need to use the `.cjs` file extension and `require` syntax to load the configuration if your package is using ESM. Use the filenames below and place in the root directory of your project.

### `eslint`

**.eslintrc.js**

```js
import base from "@srclaunch/dx/.eslintrc.ui";

export default {
  ...base,
};
```

**.eslintrc.cjs**

```js
const base = require("@srclaunch/dx/.eslintrc.ui");

module.exports = {
  ...base,
};
```
