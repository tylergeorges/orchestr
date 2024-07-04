import 'server-only';

import { createClient } from '@/lib/supabase/server';
import type { TypedSupabaseClient } from '@/lib/types';
import { getUser } from '@/utils/get-user';
import { cache } from 'react';

export const getProfile = cache((client: TypedSupabaseClient, userId: string) => {
  return client
    .from('profiles')
    .select('username, display_name, created_at, avatar, id, email')
    .eq('id', userId)
    .single();
});

export const getCurrentProfile = cache(async (userId?: string) => {
  const client = await createClient();

  const {
    data: { user }
  } = await getUser();

  if (!user) return;

  const profile = await client
    .from('profiles')
    .select('username, display_name, created_at, avatar, id, email')
    .eq('id', userId ?? user.id)
    .throwOnError()
    .single();

  return profile.data;
});
