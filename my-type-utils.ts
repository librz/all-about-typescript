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
