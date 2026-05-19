import { defineConfig } from 'oxfmt'

import { IGNORES } from './eslint/globs.ts'

export default defineConfig({
  endOfLine: 'lf',
  ignorePatterns: IGNORES,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  sortImports: {
    groups: [
      'type-import',
      ['value-builtin', 'value-external'],
      { newlinesBetween: true },
      'type-internal',
      'value-internal',
      { newlinesBetween: true },
      ['type-parent', 'type-sibling', 'type-index'],
      ['value-parent', 'value-sibling', 'value-index'],
      { newlinesBetween: true },
      'unknown',
    ],
    newlinesBetween: false,
  },
  sortPackageJson: {
    sortScripts: true,
  },
  tabWidth: 2,
  trailingComma: 'all',
})
