### TypeScript's types only exist in build-time

JavaScript is **weakly typed**, u can use `typeof` to get the *general* type of a value like `string/number/object...` but that's it.

TypeScript comes in and gives us strict types, hence more safety.

But typescript's types only exist in build-time， code written in TypeScript will be compiled into JavaScript to run in host environments(node, browser, etc)

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

