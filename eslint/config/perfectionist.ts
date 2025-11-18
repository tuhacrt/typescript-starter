/**
 * 1. alphabetical
 * 2. natural
 * 3. line-length
 */
export const TYPE = 'natural'

// 1. asc, 2. desc
export const ORDER = 'asc'

const DEFAULT_CONFIG = { order: ORDER, type: TYPE }

/**
 * Those commented out rules are much stricter.
 */
export const RULES = {
  'perfectionist/sort-array-includes': ['error', DEFAULT_CONFIG],
  'perfectionist/sort-classes': ['error', DEFAULT_CONFIG], // very strict
  'perfectionist/sort-decorators': ['error', DEFAULT_CONFIG],
  'perfectionist/sort-enums': ['error', DEFAULT_CONFIG],
  'perfectionist/sort-exports': ['error', DEFAULT_CONFIG],
  'perfectionist/sort-heritage-clauses': ['error', DEFAULT_CONFIG],
  // 'perfectionist/sort-imports': ['error', DEFAULT_CONFIG], // default disabled
  'perfectionist/sort-interfaces': ['error', DEFAULT_CONFIG],
  'perfectionist/sort-intersection-types': ['error', DEFAULT_CONFIG],
  'perfectionist/sort-jsx-props': ['error', DEFAULT_CONFIG],
  'perfectionist/sort-maps': ['error', DEFAULT_CONFIG],
  'perfectionist/sort-modules': ['error', DEFAULT_CONFIG], // very strict
  'perfectionist/sort-named-exports': ['error', DEFAULT_CONFIG],
  'perfectionist/sort-named-imports': ['error', DEFAULT_CONFIG],
  'perfectionist/sort-object-types': ['error', DEFAULT_CONFIG],
  'perfectionist/sort-objects': ['error', DEFAULT_CONFIG],
  'perfectionist/sort-sets': ['error', DEFAULT_CONFIG],
  // 'perfectionist/sort-switch-case': ['error', DEFAULT_CONFIG], // default disabled
  'perfectionist/sort-union-types': ['error', DEFAULT_CONFIG],
  // 'perfectionist/sort-variable-declarations': ['error', DEFAULT_CONFIG], // default disabled
} as any
