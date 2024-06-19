One of the most satisfying features of Typescript is narrowing. Here are a few examples:

```typescript
// equality narrowing
type Human = { name: string } & ({
  sex: 'male',
  isDad: boolean
} | {
  sex: 'female',
  isMom: boolean
})

function printHumanInfo(human: Human) {
  if (human.sex === 'male') {
    // since sex is male, isDad prop must exist
    console.log(`${human.name}${human.isDad ? ' is ' : ' is not '} a dad.`)
  } else {
    // since sex is female, isMom prop must exist
    console.log(`${human.name}${human.isMom ? ' is ' : ' is not '} a mom.`)
  }
}
```

```typescript
// in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  // animal doesn't have `swim` prop, it's not a fish, it must be a bird hence must have the fly method
  return animal.fly();
}
```

There are many types of narrowing, u can find more [here](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards)

### type predicate

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

### the never type

When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, Typescript will use a `never` tyupe to represent a state that shouldn't exist.
