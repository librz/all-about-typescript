interface is used to describe the shape of an object

### Features

- support both value & function as field type
- support optional fields
- support extending (through `interface A extends B, C` syntax)
- support index signature (through `[key: T]: K` syntax)
- support generics
- support extracting type of individual field

### Examples

```typescript
interface House {
  price: number;
  roomsCount: number;
  location: {
    city: string;
    street: string;
    houseNumber: string;
  };
  style?: 'modern' | 'retro' | 'other';
}

interface HouseDetail extends House {
  buildYear: string;
  taxRate: number;
  printAddress: (location: House['location']) => void;
}
```

### Diff with class

It's very easy to confuse interface as class, they are *totally* different in that

- interface is a build-time facility that only exist in the world of TypeScript, on the other hand, class is a valid run-time keyword in JavaScript
- class can have instances, interface cannot
- class can reference intance through `this` keyword, interface can only reference itself through its name
- you can assign property values and have method implementations inside class, however, interface only defines types of its fields. (field type can be literal values, still, its just type definition, do not confuse it with run-time value assignment)

### Restricts & Quirks

