### TypeScript's types only exist prior to build

JavaScript is **weakly typed**, there are a few methods to get type info:

1. use `typeof` to get the *general* type of a value like `string/number/object...`
2. use `instanceof` to test whether the `prototype` prop of a constructor appears anywhere in the prototype chain of an object
3. [Duck Typing](https://en.wikipedia.org/wiki/Duck_typing)

Those methods are loose & limited. TypeScript comes in and gives us strict types, hence more safety.

Typescript is a **static** type checker. Meaninging its types only exist prior to build, eventually TypeScript code will be compiled into JavaScript to be executed.

### what is type

Type is 2 things:

1. a collection of all possible values
2. all operations of those values

e.g.

type `boolean` is

1. `true`, `false`
2. `!`, `==/===`, `||`, `&&`

### what is generics

Generics are just functions for types. The input is the *placeholder* type, the return is the *result* type.

### structual type system

TypeScript's type system is structual, not nominal, meaning two types are considered the same if they have the same structure, regardless of their names.

```ts
type Equals<A, B> = (<T>() => T extends A ? 1 : 2) extends
    (<T>() => T extends B ? 1 : 2) ? true : false;

// Usage for complex types
type Test2 = Equals<string | number, number | string>; // true
type Test1 = Equals<any, string>; // false
type Test3 = Equals<string, string[][number]>; // true

// there are times where you need to normalize before compare
// such as when using intersection

type Friend1 = { name: string; age: number }
type Friend2 = { name: string } & { age: number }

type Normalize<T> = {
    [K in keyof T]: T[K]
}

type Test4 = Equals<Friend1, Friend2>; // false
type Test5 = Equals<Friend1, Normalize<Friend2>>; // true
```
