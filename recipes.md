### override prop type

```typescript
interface A {
  x: string;
  y: number;
  z: boolean;
}

type B = Omit<A, 'x'> & {
  x: number
}
```

### the famouse Normalize generic

```ts
// normalized complex types into a much more readable form
// often used for:
// 1. simplifying intersections
// 2. resolving conditional types
type Normalize<T> = {
  [key in keyof T]: T[key]
}

type TypeA = {
  name: string;
};

type TypeB = {
  age: number;
};

type TypeC = Record<'location' | 'phone', string>;

type ComplexType = TypeA & TypeB & TypeC;

type NormalizedType = Normalize<ComplexType>;

```

### Why cannot assign?

```typescript
type Student = {
    name: string;
    age: number;
}

const s1: Student = { name: 'Sherlock', age: 15 };
const s2: Student = { name: "Kate" , age: 16 };

const prop: keyof Student = Date.now() % 2 === 0 ? "age" : "name";

console.log(s1[prop], s2[prop]); // OK to read

s2[prop] = s1[prop]; // NOT OK to assign?
```

See: https://github.com/microsoft/TypeScript/issues/32693#issuecomment-598860475
See: https://github.com/microsoft/TypeScript/issues/32693#issuecomment-1006193371
