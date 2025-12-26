we all know `extends` can be used to extend class/interface, it does what its name says: extending existing fields.

But when used to specify generic's placeholder types, it's actually a constraint:

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

// here "extends" servers as a constraint
// scope: keyof T >= K
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
};

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```

reference: https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
