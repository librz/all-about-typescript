There are 3 types related to objects:

- `{}` any value except null or undefined
- `object` general purpose object
- `Object` almost never used

1. The `{}` Type (The "Empty Object")

`{}` does not mean "an object with no properties." It means "any value that can be indexed."

In JavaScript, you can technically access properties on primitives (like .length on a string or .toFixed() on a number) because JS "boxes" them into objects temporarily. Therefore, TypeScript considers almost everything to be compatible with {}.

Allowed: {}, [], "hi", 42, false

Not Allowed: null, undefined

2. The `object` Type (The "Non-Primitive")

It means "anything that is not a primitive."

Allowed: {}, [], Map, () => {}

Not Allowed: "hi", 42, false, null, undefined

When to use it: Use object when you want to ensure the value is something you can use Object.keys() on, or something that is passed by reference.

3. The `Object` Type (The "Interface")

This refers to the global JavaScript `Object` interface. It describes the methods that exist on all objects (like `.toString()` and `.hasOwnProperty()`).

In 99% of cases, you should never use this. It is essentially the same as `{}`, but it carries the extra weight of the built-in prototype methods.
