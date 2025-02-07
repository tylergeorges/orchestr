// https://github.com/gokulkrishh/bmrk.cc/blob/main/lib/supabase/cache.ts

export const createFetch =
  (options: Pick<RequestInit, "next" | "cache">) =>
  (url: RequestInfo | URL, init?: RequestInit) => {
    return fetch(url, {
      ...init,
      ...options
    });
  };
