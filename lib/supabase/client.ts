import { useMemo } from 'react';
import { createBrowserClient } from '@supabase/ssr';

import type { Database } from '@/lib/types/supabase';
import { env } from '@/lib/env';
import { TypedSupabaseClient } from '@/lib/types';

let client: TypedSupabaseClient | undefined;

const getSupabaseBrowserClient = () => {
  if (client) return client;

  client = createBrowserClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  return client;
};

export const useSupabaseBrowser = () => {
  return useMemo(getSupabaseBrowserClient, []);
};
