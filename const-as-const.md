For variables declared using `const` & assgined with a primitive value, ts knows the type of the variable is the value itself. e.g.

```typescript
const num = 5;
type TNum = typeof num; // 5

const name = "Peter";
type TName = typeof name; // "Peter"

const isAuthenticated = false;
const TIsAuthenticated = typeof isAuthenticated; // false
```

This makes sense for 2 reasons:

- `const` keyword in JavaScript prevents re-assign value to variable
- primitive value is immutable

#### The right hand side must be a literal value, if it's an expression, ts won't be able to narrow down the type. e.g.

```typescript
const num = 5;
const numIsFive = num === 5;
type TNumIsFive = typeof numIsFive; // boolean
```

In the above example, `num === 5` is an expression & is only evaluated at runtime, since `typeof numIsFive` is `boolean` instead of `false`.

#### const as const is useful for immutable object

In JavaScript, `const` keyword prevents re-assign of the varialbe itself, but if the varialble is an object, u can still change it's props. e.g.

```javascript
const peter = {
  age: 16,
  name: "Peter Melrose"
}

student.age = 17;
```

if we were to get the type of `peter` it would be:

```typescript
type T = {
  age: number;
  name: string;
}
```

If we are sure that `peter` is totally immutable, there are a few options:

1. decorate `peter` with type annotations (too verbose)
2. use `Object.freeze` (this solution has runtime effects though)
3. use `as const` constriant

The 3rd one is most often used, although `const ... as const` may seem confusing at first glance:

```typescript
const peter = {
  age: 16,
  name: "Peter Melrose"
} as const;
type T = typeof peter; // { age: 16, name: "Peter Melrose" }
```
