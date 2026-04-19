Sometimes you want to validate if a varaible fits a specific type, you can use explicit type annotation for this, e.g.

```ts
const Colors: Record<string, string> = {
  Red: "#ff0000",
  Green: "#00ff00",
  Blur: "#0000ff"
}
```

But you also want to keep the inferred type, e.g.

```ts
const Colors = {
  Red: "#ff0000",
  Green: "#00ff00",
  Blue: "#0000ff"
}
// the inferred type is Record<"Red" | "Green" | "Blue">
console.log(Colors.Red); // you get auto completion for this as tsc infers the type of Colors
```

If you want to validate a type but keep the inferred type, use the `satisfies` keyword:

```ts
const Colors = {
  Red: "#ff0000",
  Green: "#00ff00",
  Blue: "#0000ff"
} satisfies Record<string, string>; // validation
console.log(Colors.Red); // you get auto completion for this as the inferred type is kept
```

