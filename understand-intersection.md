In typescript, intersection is a type operator denoted using `&`.

Given the following:

```ts
type A = { name: string }
type B = { age: number }
type C = A & B
```

You'd picture a Venn diagram in your head, where:

- A is a circle that contains `name` field
- B is a circle that contains `age` field
- C is the common fields of A and B which doesn't exist, so C is never

But this is not the case. C actually contains both fields from A & B! How come?

In typescript, everything is type, type is made of all the value it contains, so you have to think about *set of values* instead of *set of properties*:

- A: all values with `name` field
- B: all values with `age` field
- C: intersection of values in A and B, what kind of values satisfy this requirement? Values with both `name` & `age` field.

Of course, intersection can be used between primary types as well:

```ts
string & "name" // "name"
("name" | "age") & "name" // "name"
```
