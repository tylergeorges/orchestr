// This code comes from https://github.com/radix-ui/primitives/tree/main/packages/react/compose-refs

import { useCallback } from 'react';

type PossibleRef<T> = React.Ref<T> | undefined;

/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */
function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as React.MutableRefObject<T>).current = value;
  }
}

/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */
function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => {
    for (let i = 0; i < refs.length; i++) {
      setRef(refs[i], node);
    }
  };
}

/**
 * A custom hook that multiple refs
 * Accepts callback regs and RefObject(s)
 */
export function useComposedRefs<T>(...refs: PossibleRef<T>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(composeRefs(...refs), refs);
}
