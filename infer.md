Infer comes handy when u need to deduce type from a complex type.

It can only be used inside the `extends` clause.

```ts
const students: Array<{ name: string; age: number; }> = [];

type IStudent = typeof students[number];

// Does typeof students fits certain shape? If yes, extract type from the shape
type Student = typeof students extends (infer T)[] ? T : never;
```

A practical example:

```ts
// common type from UI library which defines type of props for <Select /> component
interface SelectProps {
  options?: (string | number | {
    label: ReactNode | string;
    value: string | number;
    disabled?: boolean;
    extra?: any;
  })[];
}

// infer type of option
type ISelectOption = Pick<SelectProps, 'options'>['options'] extends undefined | (infer T)[]
  ? T
  : never;
```
