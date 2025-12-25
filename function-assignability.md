type of function can be expressed as: `(...args: A) => R`

for example: `(n: number, m: string) => string` can be written as `(...args: [number, string]) => string`

### rule

let's define 2 function types:

1. type A: (...args: TA) => RA
2. type B: (...args: TB) => RB

let's say we want to assign A to B, here's the rule:

1. arg length: A <= B
3. arg order: must be the same
4. arg scope (of each arg): A >= B 
2. return scope: A >= B

### understand arg rule

arg rule can be understood using event: a function that sends signals out as arguments

- arguments can be many, but handler(A) may choose to only use some of them. Thus: `args ength: A <= B`
- arg order rule is self-explanatory
- for any specific argument, handler(A)'s type can have larger scope, this way, inside handler's body, it's forced to do more checks

```ts
type OnClickBox = (x: number, y: number, color: string) => void;

type ClickHandler = (x: number, y: number | string) => void;

const handler: ClickHandler = (x, y) => {
    const position: string = `{${x}, ${y}}`;
    return position;
}

// assign type ClickHandler to OnClickBox
const a: OnClickBox = handler; // no problem
```

### understand return scope rule

return scope rule can be understood using getter function

kind of self-explnatory, maybe I'll come back to add an example later~

