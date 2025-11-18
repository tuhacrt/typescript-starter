import js from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import style from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'
import format from 'eslint-plugin-format'
import pluginImport from 'eslint-plugin-import-x'
import n from 'eslint-plugin-n'
import perfectionist from 'eslint-plugin-perfectionist'
import unicorn from 'eslint-plugin-unicorn'
import unusedImport from 'eslint-plugin-unused-imports'
import globals from 'globals'
import { plugin as ts, parser as tsParser } from 'typescript-eslint'

import { RULES as perfectionistRules } from './eslint/config/perfectionist'
import { getStylisticRules } from './eslint/config/stylistic'
import { RULES as unicornRules } from './eslint/config/unicorn'
import { GLOB_TS, IGNORES } from './eslint/globs'

export default (defineConfig as any)([
  { ignores: IGNORES },
  {
    plugins: {
      format,
      import: pluginImport,
      node: n,
      perfectionist,
      style,
      ts,
      unicorn,
      unusedImport,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  getStylisticRules({}),
  { extends: ['js/recommended'], files: ['**/*.{js,mjs,cjs,ts}'], plugins: { js } },
  {
    files: [GLOB_TS],
    rules: {
      'curly': ['error', 'all'],
      'import/order': ['error', {
        'alphabetize': { caseInsensitive: true, order: 'asc' },
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
        'newlines-between': 'always',
        /** path groups config if needed */
        // pathGroups: [
        //   // place react and react-native imports at the top
        //   {
        //     group: 'external',
        //     pattern: 'react+(|-native)',
        //     position: 'before',
        //   },
        //   { group: 'internal', pattern: '@core/**', position: 'before' },
        // ],
        // pathGroupsExcludedImportTypes: ['react'],
      }],
      'no-unused-vars': 'off', // defined by ts
      'node/handle-callback-err': ['error', '^.*(e|E)rr'],
      'node/no-deprecated-api': 'error',
      'node/no-exports-assign': 'error',
      'node/no-new-require': 'error',
      'node/no-path-concat': 'error',
      'node/process-exit-as-throw': 'error',
      'object-shorthand': ['error', 'properties'],
      'ts/array-type': ['error', { default: 'generic' }],
      'ts/consistent-indexed-object-style': ['error', 'record'],
      'ts/consistent-type-definitions': ['error', 'type'],
      'ts/consistent-type-imports': 'error',
      'ts/no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'unusedImport/no-unused-imports': 'error',
      // ...stylisticRules,
      ...perfectionistRules,
      ...unicornRules,
    },
  },
  { extends: ['json/recommended'], files: ['**/*.json'], ignores: ['.vscode/*.json'], language: 'json/json', plugins: { json } },
  { extends: ['json/recommended'], files: ['**/*.jsonc'], language: 'json/jsonc', plugins: { json } },
  { extends: ['json/recommended'], files: ['**/*.json5'], language: 'json/json5', plugins: { json } },
  { extends: ['markdown/recommended'], files: ['**/*.md'], language: 'markdown/gfm', plugins: { markdown } },
])
