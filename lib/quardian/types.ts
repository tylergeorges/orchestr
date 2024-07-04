/* eslint-disable @typescript-eslint/ban-types */
export type AnyFn = (...args: never) => unknown;

export type Prettify<T> = {
  [P in keyof T]: T[P];
} & {};
