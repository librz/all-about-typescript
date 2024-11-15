Requirement:

Define a function with 2 parameters where:

1. if the first is of type `string` then the second should be of type `number`
2. if the first is `number` the second should be `string`

### Method 1: Generics

const func = <T = string | number>(arg1: T, arg2: T extends string ? number : string) => {
    if (typeof arg1 === 'string') {
        return arg1.slice(0, arg2 as number);
    } else {
        return (arg2 as string).slice(0, arg1 as number);
    }
}

### Spread operator & Union type

const func = (...args: [string, number] | [number, string]) => {
    const [arg1, arg2] = args;
    if (typeof arg1 === 'string') {
        return arg1.slice(0, arg2 as number);
    } else {
        return (arg2 as string).slice(0, arg1);
    }
}
