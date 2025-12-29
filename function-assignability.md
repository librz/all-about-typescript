type of function can be expressed as: `(...args: T) => P`

for example: `(n: number, m: string) => string` can be written as `(...args: [number, string]) => string`

### rules

let's define 2 function types:

1. type L: (...args: L1) => L2
2. type R: (...args: R1) => R2

let's say we want to assign R(right) to L(eft), here's the rule:

1. arg length: L >= R
2. arg order: must be the same
3. arg assignability (of each arg): L -> R
4. return assignability: R -> L

### understand the rules

arg rule can be understood using event, a function that:

1. sends out signals as arguments
2. may expect to receive a value as return

Rule of sum is: sender must be assignale to receiver.

Let's review the type definition:

```ts
1. type L: (...args: L1) => L2
2. type R: (...args: R1) => R2
```

- argument(L1 is sender, R1 is receiver), thus assignability is `L1 -> R1` (this explains the argument related rules)
- return(R2 is sender, L2 is receiver): `R2 -> L2` (this explains the return value rule)

That's it!

### an example

```ts
type Position2D = {
  x: number,
  y: number
}

type Position3D = Position2D & {
  z: number
}

// I provide the current 3D position & the z-axis distance
// I expect to get a new z position
type OnJump = (position: Position3D, distance: number) => Pick<Position3D, "z">; 

// All I need is the current 2D position
// I return the new 3D position
type JumpHandler = (position: Position2D) => Position3D;

const handler: JumpHandler = (position) => {
  return {
    ...position,
    z: 100 // always jump to position 100
  }
}

const a: OnJump = handler; // no problem
```
