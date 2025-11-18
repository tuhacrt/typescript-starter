import type { Linter } from 'eslint'

import type { OptionsFiles, OptionsOverrides } from '../types'
import { interopDefault } from '../utils'

type StylisticCustomizeOptions = OptionsFiles & OptionsOverrides

const basicRules = {
  'style/generator-star-spacing': ['error', { after: true, before: false }],
  'style/yield-star-spacing': ['error', { after: true, before: false }],
} as Partial<Linter.RulesRecord>

const opinionatedRules = {
  'style/array-bracket-newline': ['error', 'consistent'],
  'style/array-element-newline': ['error', 'consistent'],
  'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],
  'style/function-call-argument-newline': ['error', 'consistent'],
  'style/function-call-spacing': 'error',
  'style/function-paren-newline': 'error',
  'style/implicit-arrow-linebreak': 'error',
  'style/key-spacing': ['error', { afterColon: true, beforeColon: false, mode: 'strict' }],
  'style/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
  // 'style/member-delimiter-style': ['error', { multiline: { delimiter: 'semi', requireLast: true }, multilineDetection: 'brackets', singleline: { delimiter: 'semi', requireLast: false } }],
  'style/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
  'style/no-confusing-arrow': ['error', { allowParens: true }],
  'style/no-extra-semi': 'error',
  'style/object-curly-newline': ['error', { consistent: true }],
  'style/padding-line-between-statements': [
    'error',
    { blankLine: 'always', next: 'return', prev: '*' },
    { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
    { blankLine: 'always', next: ['const', 'let', 'var'], prev: '*' },
    { blankLine: 'any', next: ['const', 'let', 'var'], prev: ['const', 'let', 'var'] },
    { blankLine: 'always', next: '*', prev: 'if' },
    { blankLine: 'always', next: 'if', prev: '*' },
  ],
} as Partial<Linter.RulesRecord>

export async function getStylisticRules({ files = ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], overrides = {} }: StylisticCustomizeOptions = {}): Promise<Linter.Config<Linter.RulesRecord>> {
  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'))
  const config = pluginStylistic.configs.customize({ pluginName: 'style' })

  return {
    files,
    name: 'stylistic/rules',
    plugins: config.plugins,
    rules: {
      ...config.rules,
      ...basicRules,
      ...opinionatedRules,
      ...overrides,
    },
  }
}
