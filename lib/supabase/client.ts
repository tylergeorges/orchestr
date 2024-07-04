import { useMemo } from "react";
import { createBrowserClient } from "@supabase/ssr";

import type { Database } from "@/lib/types/supabase";
// import { env } from "@/lib/env";
import type { TypedSupabaseClient } from "@/lib/types";

let client: TypedSupabaseClient;

const createClient = () => {
  if (client) {
    return client;
  }

  client = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  return client;
};

export const useSupabaseBrowser = () => {
  return useMemo(createClient, []);
};
