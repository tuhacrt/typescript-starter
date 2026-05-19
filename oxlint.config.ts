import { defineConfig } from 'oxlint'

import { RULES as perfectionistRules } from './eslint/config/perfectionist.ts'
import { RULES as stylisticRules } from './eslint/config/stylistic.ts'
import { RULES as unicornRules } from './eslint/config/unicorn.ts'
import { addPrefix, GLOB_TESTS, IGNORES } from './eslint/globs.ts'

const SRC_GLOB_TESTS = addPrefix('**/src', GLOB_TESTS)

export default defineConfig({
  categories: {
    correctness: 'error',
    pedantic: 'allow',
    perf: 'warn',
    suspicious: 'warn',
  },
  env: {
    browser: true,
  },
  ignorePatterns: IGNORES,
  jsPlugins: [
    { name: 'perfectionist', specifier: 'eslint-plugin-perfectionist' },
    { name: 'style', specifier: '@stylistic/eslint-plugin' },
  ],
  options: { typeAware: true },
  overrides: [{ files: SRC_GLOB_TESTS }],
  plugins: ['eslint', 'oxc', 'promise', 'typescript', 'unicorn'],
  rules: {
    curly: ['error', 'multi-line', 'consistent'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-await-in-loop': 'error',
    'no-shadow': 'off',
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/no-process-env': 'error',
    'oxc/bad-bitwise-operator': 'error',
    'prefer-const': ['warn', { destructuring: 'all' }],
    'prefer-destructuring': 'warn',
    'typescript/array-type': ['error', { default: 'array-simple', readonly: 'generic' }],
    'typescript/consistent-type-imports': 'error',
    ...stylisticRules,
    ...perfectionistRules,
    ...unicornRules,
  },
})
