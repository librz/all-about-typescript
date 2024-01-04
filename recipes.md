### Overriding prop type

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
