export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {};

// the little `& {}` is a clever hack to trick tsc into fully resolving a type that it might otherwise leave as lazy reference
// TypeScript is lazy. When you write `[K in keyof T]: T[K]`, TypeScript thinks: "I've mapped the keys of T, but I'll wait until I actually need to check a value against this type before I do the heavy lifting of expanding it."
// By adding `& {}`, you are introducing a new operation(intersection). TypeScript looks at the mapped type and says: "Wait, I can't just leave this as a reference; I need to intersect it with this empty object now."

/**
 * Utility type to make optional properties compatible with exactOptionalPropertyTypes
 * Auto adds | undefined to properties that are already optional
 */
export type MakeExactOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
} & {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]?: T[K] | undefined;
};

/**
 * Alternative: apply to specific properties
 */
export type MakeExactOptionalPartial<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P] | undefined;
};

export type MakeRequired<T, K extends keyof T> = {
  [P in K]-?: Exclude<T[P], undefined>;
};

export type ActionHandlers<T> = {
  [K in keyof T as `on${Capitalize<string & K>}Change`]: (
    value: NonNullable<T[K]>,
  ) => void;
};
