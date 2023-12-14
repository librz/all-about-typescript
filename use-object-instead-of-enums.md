TypeScript has the built-in `Enum` keyword, but it's flawed in some ways & u should use POJO(plain old javascript object) instead.

The main benifit of using Enum: Enum is like a union type, but also provides a way to reference value by key. Being able to get value by key make it way harder to make silly mistakes such as mispelling.

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

#### Reference for why Enums should be avoided

- [objects-vs-enums](https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums)
- [ont-use-enums-in-typescript](https://dev.to/ivanzm123/dont-use-enums-in-typescript-they-are-very-dangerous-57bh)
