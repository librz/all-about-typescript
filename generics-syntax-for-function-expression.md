for function declaration, syntax of generics is sth like:

```typescript
function getCount<T>(...args: T[]): number {
    return args.length;
}
```

for function expression, if we were to write:

```typescript
const getCount = <T>(...args: T[]) => {
    return args.length;
}
```

typescript will throw error saying `JSX element 'T' has no corresponding closing tag.`, it seems like typescript compiler parses the above code as JSX.

To fix, simply use `<T,>` instead of `<T>`:

```typescript
const getCount = <T,>(...args: T[]) => {
    return args.length;
}
```

For details, see [what-is-the-syntax-for-typescript-arrow-functions-with-generics](https://stackoverflow.com/questions/32308370/what-is-the-syntax-for-typescript-arrow-functions-with-generics)

