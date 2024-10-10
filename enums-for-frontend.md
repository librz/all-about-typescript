A common pattern for using enums on the frontend:

```ts
// named reference to enum value
export enum Status {
  Loading = 0,
  Success = 1,
  Failure = 2,
}

// display enum label (using record can guarantee all enum values are included)
export const StatusToName: Record<Status, string> = {
  [Status.Loading]: '加载中',
  [Status.Success]: '成功',
  [Status.Failure]: '失败',
};

// display enum options(which contains value & label)
export const StatusOptions: Array<{ label: string; value: Status }> =
  Object.entries(StatusToName).map(([value, label]) => ({
    value: Number(value) as Status, // manual type conversion sucks though
    label,
  }));
```
