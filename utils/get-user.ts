import { createClient } from '@/lib/supabase/server';
import { cache } from 'react';

export const getUser = cache(async () => {
  const supabase = await createClient();

  const res = await supabase.auth.getUser();

  return res;
});
