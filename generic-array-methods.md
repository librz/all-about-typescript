In TypeScript, array methods are actually generic methods. It helps with type narrowing.

### signature

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

You can provide a type to `filter`, telling TypeScript what's the element type of the filtered array should be:

```ts
const validUsers: User[]  = users.filter<User>(it => Boolean(it)); // OK
// type inference also works: const validUsers = users.filter<User>(it => Boolean(it));
```

A more generic approach would be using type predicate(guard):

```ts
function isValidUser(user: null | User): user is User {
  return Boolean(user);
}
const validUsers: User[]  = users.filter(it => itValidUser(it)); // OK
```

### working with union types and `find`

```ts

interface Dog { type: 'dog'; bark(): void }
interface Cat { type: 'cat'; meow(): void }
type Animal = Dog | Cat;

const animals: Animal[] = [
  { type: 'dog', bark: () => console.log('Woof!') },
  { type: 'cat', meow: () => console.log('Meow!') }
];

// Without generic, TypeScript doesn't know which type we found
const someDog = animals.find(animal => animal.type === 'dog');
// Type is Animal | undefined

// With generic, we tell TypeScript what we're looking for
const dog = animals.find<Dog>(animal => animal.type === 'dog');
// Type is Dog | undefined
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
