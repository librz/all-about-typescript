In TypeScript, array methods are actually generic methods. It helps with type narrowing.

### signature

Note: predicate must be a type predicate and is not just a callbackFn

```ts
// Examples of generic array methods
array.map<U>(callbackFn)           // Maps elements to type U
array.filter<S>(predicate)         // Returns array of type S
array.reduce<U>(reducer, initial)  // Reduces to value of type U
array.find<S>(predicate)           // Finds element of type S
array.flatMap<U>(callbackFn)       // Maps and flattens to type U
array.every<S>(predicate)          // Checks if all elements satisfy condition
array.some<S>(predicate)           // Checks if any elements satisfy condition
```

### type narrowing with `map`

```ts
interface Person { name: string; age: number }

const data = ['{"name":"Alice","age":30}', '{"name":"Bob","age":25}'];

// Without generic: Result type is any[]
const people1 = data.map(str => JSON.parse(str));

// With generic: Result type is Person[]
const people2 = data.map<Person>(str => JSON.parse(str));
```

### type narrowing with `filter`

```ts
type User = {
    name: string;
}
const users: Array<User | null> = [{name: "John"}, { name: "Lisa" }, null];
const validUsers: User[]  = users.filter(it => Boolean(it)); // error: Type 'null' is not assignable to type 'User'.
```

We can use a type predicate in the callback function:

```ts
const validUsers: User[]  = users.filter<User>(it => Boolean(it)); // Signature '(it: User | null): boolean' must be a type predicate.
const validUsers: User[]  = users.filter<User>((it): it is User => Boolean(it)); // works 
const validUsers: User[]  = users.filter((it): it is User => Boolean(it)); // actually we rarely need to specify the <User> explicitly
const validUsers = users.filter((it): it is User => Boolean(it)); // type inference works as well
```

### transforming with `reduce`

```ts
const numbers = [1, 2, 3, 4, 5];

// Explicit return type for more complex reducers
const result = numbers.reduce<Map<string, number>>((map, num) => {
  map.set(num.toString(), num * num);
  return map;
}, new Map());
```
