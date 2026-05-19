#!/usr/bin/env node
import { writeFileSync } from 'fs'

const stagedFiles = process.argv.slice(2)

const tsconfig = {
  extends: './tsconfig.json',
  include: stagedFiles.concat(['**/*.d.ts']),
}

writeFileSync('tsconfig.precommit.json', JSON.stringify(tsconfig, null, 2) + '\n')
