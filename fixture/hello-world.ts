import type { Foo } from './type'

const foo: Foo = 'foo'
const bar = 'bar'

function helloWorld() {
  return `Hello ${foo} ${bar}`
}

export { foo, bar, helloWorld }
