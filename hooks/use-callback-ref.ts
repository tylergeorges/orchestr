'use client';

import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';
import { useMemo, useRef } from 'react';

export const useCallbackRef = <T extends (...args: never[]) => unknown>(
  callback: T | undefined
): T => {
  const callbackRef = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    callbackRef.current = callback;
  });

  // https://github.com/facebook/react/issues/19240
  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
};
