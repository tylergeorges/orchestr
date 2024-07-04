import { useCallback, useRef, useSyncExternalStore } from 'react';

export function useMediaQuery(query: string) {
  const cachedQuery = useRef(query);

  const subscribe = useCallback((callback: (ev: MediaQueryListEvent) => void) => {
    const matchMedia = window.matchMedia(cachedQuery.current);

    matchMedia.addEventListener('change', callback);
    return () => {
      matchMedia.removeEventListener('change', callback);
    };
  }, []);

  const getSnapshot = () => {
    return window.matchMedia(cachedQuery.current).matches;
  };

  const getServerSnapshot = () => {
    throw Error('useMediaQuery is a client-only hook');
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
