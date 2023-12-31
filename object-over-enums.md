TypeScript has the built-in `Enum` keyword, but it's flawed in some ways & u should use POJO(plain old javascript object) instead.

### What benifit does Enum provide us?

Enum is like a union type, but it also allows you to reference value by name(key).

Being able to reference value by key is important, it's way harder to make silly mistakes such as mispelling & super friendly when it comes to refactoring.

### Why Enums should be avoided

- [objects-vs-enums](https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums)
- [dont-use-enums-in-typescript](https://dev.to/ivanzm123/dont-use-enums-in-typescript-they-are-very-dangerous-57bh)

### Why POJO can replace Enum

- POJO provides reference-value-by-key ability
- U can easily extract an union type from POJO in TypeScript

### Use POJO instead of Enum - An example

The following is an example of treating object as enum:

```ts
const StudentProps = {
  Age: 'age',
  Name: 'name',
} as const;

type StudentProp = typeof StudentProps[keyof typeof StudentProps]; // union type

function printStudentPropLabel(prop: StudentProp) {
    if (prop === StudentProps.Age) {
        console.log('Current Age:')
    } else if (prop === StudentProps.Name) {
        console.log('Full Name:')
    } else {
        console.warn('Unknown Prop', prop)
    }
}
printStudentPropLabel(StudentProps.Age);
```
