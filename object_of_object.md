A lot of times, especially in FE, there's a need to separate value from name.

An simple object type will solve this:

```typescript
interface Lang {
  Value: string;
  Name: string;
}
```

If we have a list of static configs, u may attempt to decalre an array like this:

```typescript
type LangValue = 'go' | 'js';
const Langs: Array<{ Value: LangValue; Name: string }> = [
  {
    Value: 'go',
    Name: 'Golang'
  },
  {
    Value: 'js',
    Name: 'JavaScript'
  }
];
```

This way, we can define a function to get name by value:

```typescript
function getLangName(value: LangValue): string {
  return Langs.find(it => it.Value === value)?.Name || '-';
}
```

But using array has a problem: we cannot use it like enum hence no `reference value by key` ability. Using `object of object` can easily solve this:

```typescript
const Languages = {
  Go: {
    Value: 'go',
    Name: 'Golang'
  },
  JS: {
    Value: 'js',
    Name: 'JavaScript'
  },
} as const;

// easy type generation
type Lang = typeof Languages[keyof typeof Languages];
type LangValue = Lang['Value']; // "go" | "js"

function getLangName(value: LangValue): string {
  // easy convertion to array to support search
  const langs = Object.values(Languages);
  const lang = langs.find(it => it.Value === value);
  return lang?.Name || '-';
}

// use it like an enum (no weekly typed magic values in your code)
console.log(Languages.Go.Value, Languages.Go.Name);
```

