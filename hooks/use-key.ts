import { useCallback, useEffect, useRef } from 'react';

export const useKey = <Key extends string, Fn extends (e?: KeyboardEvent) => void>(
  key: Key,
  fn: Fn
) => {
  const fnRef = useRef(fn);

  fnRef.current = fn;

  const eventCallback = useCallback((e: KeyboardEvent) => {
    if (e.key === key) {
      fnRef.current(e);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', eventCallback);

    return () => {
      document.removeEventListener('keydown', eventCallback);
    };
  }, [eventCallback]);
};
