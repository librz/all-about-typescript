`typeof` is a keyword that exists both in JavaScript & TypeScript.

In JavaScript:

```js
const Patrick = {
    age: 27;
    name: 'Patrick Ren';
}
console.log(typeof Patrick) // 'object'
```

In TypeScript:

```ts
const Patrick = {
    age: 27;
    name: 'Patrick Ren';
}

// compile time `typeof`
type StudentProps = typeof Patrick // { age: number, name: string }
// runtime `typeof`
const jsType = typeof Patrick; // 'object'
```

As u can see, TypeScript is smart enough to know which is which.