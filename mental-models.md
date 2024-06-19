### TypeScript's types only exist in build-time

JavaScript is **weakly typed**, there are a few methods to get type info:

1. use `typeof` to get the *general* type of a value like `string/number/object...`
2. use `instanceof` to test whether the `prototype` prop of a constructor appears anywhere in the prototype chain of an object
3. [Duck Typing](https://en.wikipedia.org/wiki/Duck_typing)

But those methods are loose & limited. TypeScript comes in and gives us strict types, hence more safety.

Note: typescript's types only exist in build-time, eventually TypeScript code will be compiled into JavaScript to run in host environments(node, browser, etc)

### what is type?

Type is 2 things:

1. a collection of all possible values
2. all operations of those values

e.g.

type `boolean` is

1. `true`, `false`
2. `!`, `==/===`, `||`, `&&`

### what is generics

Generics are just functions for types. The input is the *placeholder* type, the return is the *result* type.
