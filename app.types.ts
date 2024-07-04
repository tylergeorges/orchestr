/* eslint-disable @typescript-eslint/ban-types */
import type { Route } from 'next';

declare global {
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  type WithChildren<T = {}> = React.PropsWithChildren<T>;

  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  type WithClassNameChildrenProps<T = {}> = WithChildren<T & { className?: string }>;

  type ElementProps<ElementTag extends keyof JSX.IntrinsicElements> =
    JSX.IntrinsicElements[ElementTag];

  type OmitChildren<T extends WithChildren> = Exclude<T, 'children'>;

  type ElementPropsWithVariants<
    Element extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    Variants
  > = Omit<Element, keyof Variants> & Variants;

  type AppRoutes<T extends string> = Route<T> | URL;

  type NoNullable<T> = T extends boolean ? boolean : T & {};

  type Defined<T extends object> = {
    [K in keyof T]: T[K] extends object ? Defined<T[K]> : NoNullable<T[K]>;
  };
}

export {};
