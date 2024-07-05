import { useMemo } from 'react';
import { createBrowserClient } from '@supabase/ssr';

import type { Database } from '@/lib/types/supabase';
import type { TypedSupabaseClient } from '@/lib/types';
import { env } from '@/lib/env';

let client: TypedSupabaseClient;

const createClient = () => {
  if (client) {
    return client;
  }

  client = createBrowserClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  return client;
};

export const useSupabaseBrowser = () => {
  return useMemo(createClient, []);
};
