const GLOB_SRC_EXT = '?([cm])[jt]s?(x)'
const GLOB_SRC = '**/*.?([cm])[jt]s?(x)'

const GLOB_JS = '**/*.?([cm])js'
const GLOB_JSX = '**/*.?([cm])jsx'

const GLOB_TS = '**/*.?([cm])ts'
const GLOB_TSX = '**/*.?([cm])tsx'

const GLOB_STYLE = '**/*.{c,le,sc}ss'
const GLOB_CSS = '**/*.css'
const GLOB_SCSS = '**/*.scss'

const GLOB_JSON = '**/*.json'
const GLOB_JSON5 = '**/*.json5'
const GLOB_JSONC = '**/*.jsonc'

const GLOB_MARKDOWN = '**/*.md'
const GLOB_MARKDOWN_IN_MARKDOWN = '**/*.md/*.md'
const GLOB_YAML = '**/*.y?(a)ml'
const GLOB_XML = '**/*.xml'
const GLOB_HTML = '**/*.htm?(l)'

const GLOB_TESTS = [
  `**/*.spec.${GLOB_SRC_EXT}`,
  `**/*.test.${GLOB_SRC_EXT}`,
]

const IGNORES = [
  '**/node_modules/**/*',
  '**/dist/**/*',
]

function addPrefix(prefix: string, globs: Array<string> | string): Array<string> {
  return (Array.isArray(globs) ? globs : [globs]).map(glob => `${prefix}/${glob}`)
}

export {
  addPrefix,
  GLOB_CSS,
  GLOB_HTML,
  GLOB_JS,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_JSONC,
  GLOB_JSX,
  GLOB_MARKDOWN,
  GLOB_MARKDOWN_IN_MARKDOWN,
  GLOB_SCSS,
  GLOB_SRC,
  GLOB_SRC_EXT,
  GLOB_STYLE,
  GLOB_TESTS,
  GLOB_TS,
  GLOB_TSX,
  GLOB_XML,
  GLOB_YAML,
  IGNORES,
}
