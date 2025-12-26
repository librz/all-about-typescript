Index signature & mapped types both defines objects with dynamic keys.

#### index signature

index signature is very general, use it when you don't know key names beforehand.

syntax: `{ [key: T]: U }`

```ts
type UserPool = {
  [id: string]: User
}
```

Note: T must be either `string`, `number`, `symbol` or template literal

#### mapped types

syntax: `{ [P in K]: T }`, K usually is a union

```ts
interface FormState {
  firstName: string;
  lastName: string;
  age: number;
  sex: "male" | "female";
}

type ReadonlyFormState = {
  readonly [K in keyof FormState]: FormState[K] // use readonly modifier
}

type PartialFormState = {
  [K in keyof FormState]?: FormState[K] // use ? modifier
}

type PickByType<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K]
}

type FormStateStringFields = PickByType<FormState, string>

```
