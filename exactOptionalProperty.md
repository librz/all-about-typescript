`exactOptionalProperty`, if set to true, forbids setting an optional value to undefined.

```ts
type Worker {
  id: string;
  address?: string;
}

const john: Worker = {
  id: "abc",
  address: undefined // ❌
}

const bob: Worker = {
  id: "def",
  address: "221B, Baker Street" // ✅
}

const list: Worker = {
  id: "ghi", // ✅
}
```

This could help avoid errors while using spreading syntax:

```ts
interface Settings {
  theme?: string; // e.g., light, dark
}

let appSettings: Settings = {
  theme: "light",
};

// Partial update
function updateSettings(newSettings: Partial<Settings>) {
  appSettings = { ...appSettings, ...newSettings };
}

// With exactOptionalPropertyTypes: false
updateSettings({ theme: undefined });
console.log(appSettings.theme); // undefined (overrides "light")
```

If you are building React component, you might consider add `undefined` to optional prop type:

```tsx
type IUserInfoProps {
  id: string;
  address?: string | undefined; // although address is optional, it can also accept undefined as value
}

// won't alert error even if exactOptionalProperty is set to true
<UserInfo id="adb" address={getAddress() as string | undefined} />
```
