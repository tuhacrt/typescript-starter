import { getStylisticRules } from '../eslint/config/stylistic'

export const complexArray = [1, 2, 3, undefined]

export type A = {
  [key: string]: string
  a: string
  ['basg']: string
}

export const test = {
  ['basdfs']: 1,
}

export const test2 = undefined

export function a(b: any, c: any) {
  if (c) {
    console.log(c)
  }

  if (b) {
    console.log(b)
  } else {
    console.log(c)
  }

  // const foo = 1, bar = 2

  // const d = [1, 2, 3]
}

a(1, 2)

console.log(JSON.stringify((await getStylisticRules({})).rules))
