Index signature & mapped types both defines objects with dynamic keys.

### index signature

index signature is very general, use it when you don't know key names beforehand.

syntax: `{ [key: T]: U }`

```ts
type UserPool = {
  [id: string]: User
}
```

Note: T must be either `string`, `number`, `symbol` or template literal. It cannot be union or literal values.

A lot of times, we can use `Record` to do the same thing. For example:

```ts
type UserPool = {
  createdAt: string;
  [id: string]: User;
}

type UserPool = { createdAt: string } & Record<string, User>
```

Normally:

- prefer index signature over `Record + intersection` combo
- prefer `Record` if there's no need to intersect types

### mapped type

syntax: `{ [P in K]: T }`, K usually is a union

You can construct common type utilities using mapped type:

```ts

type PickFrom<T, K extends keyof T> = {
  [P in K]: T[P] 
}

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type Partial<T, K extends keyof T> = {
  [P in K]?: T[P] // use ? modifier
}

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P] // use readonly modifier
}
```

advanced:

```ts
type PickByType<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K] // this is magic!
}

interface FormState {
  name: string;
  age: number;
  sex: "male" | "female";
}

type FormStateStringFields = PickByType<FormState, string>
```


