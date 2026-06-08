`readonly` is a property modifier to prevent reassignability

## scope & effect

Object props. (array is )

```ts
// literal object props
type Student = { readonly id: string }
const me: Student = { id: "abc" }
me.id = "def"; // Error

// class fields
class Student {
  readonly id: string;

  constructor(id: string) {
    this.id = id; // Okay, init
  }

  udpateId(id: string) {
    this.id = id // Error, update
  }
}


// arrays (or tuples as readonly makes it fixed length)
const colors: readonly[]  = ["red", "green", "blue"];
colors[0] = "silver"; // Error
colors.push("yellow"); // Error
colors.pop(); // Error
```

## shallowness (top-level only)

```ts
type Student = {
  readonly id: number;
  readonly name: string;
  readonly details: {
    age: number;
    major: string;
  };
  readonly grades: number[];
};
const student: Student = {
  id: 101,
  name: "Alex",
  details: {
    age: 21,
    major: "Computer Science"
  },
  grades: [88, 92, 95]
};
student.details.age = 22; // OK
student.grades.push(100); // OK
```

## assignability (covariant)

- mutable to readonly: OK
- readonly to mutable: Error

```ts
const arr1: string[] = ["Hi", "How's it going"];
const arr2: readonly string[] = arr1; // OK, covariant
const arr3: string[] = arr2; // Error
```

Why passing mutable to readonly is covariant?

By definition, covariant says you can pass value of a more specific type to a variable of a more general type. So the question becomes: Is `string[]` more specific than `readonly string[]`? The answer is YES, the reasoning is:

- `readonly string[]`: data + readonly methods
- `string[]`: data + readonly methods + write methods (e.g. `push`, `pop`)

So `string[]` can do everyhing `readonly string[]` does(read data), plus a whole lot more(write data). Thus it's more specific


## the Readonly utility

`Readonly` is a generic that marks all props in an object type as `readonly`

```ts
type Student = {
  readonly id: string;
  name: string;
  grades: string;
}

type ReadonlyStudent = Readonly<Student>
```

## gotcha

`readonly` cannot guarantee true immutability. For example:

```ts
const arr1: string[] = ["Hi", "How's it going"];
const arr2: readonly string[] = arr1; // OK
arr1.push("How are you"); // OK
console.log(arr2); // Oops, by mutating arr1, arr2 is mutated
```

There's several ways to prevent this:

- use spread operator when assiging to `readonly`
- use `Object.freeze`
