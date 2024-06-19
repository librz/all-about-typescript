Sometimes, we know more about our types than TypeScript. Under such scenario, we can *help* typescript by providing assistant info.

### type assertion using `as`

syntax: {var} as {type}, {var} as const

[type assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

### non-null assertion using `!` postfix

[non-null assertion operator](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

### type predicate using `is`

type predicate allows us to tell Typescript that a variable is of certain type

```typescript
// sytax: {var} is {Type}
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

// this can be extremely helpful when filtering an union

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
 
// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
```
