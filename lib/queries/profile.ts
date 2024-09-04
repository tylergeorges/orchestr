import 'server-only';

import { createClient } from '@/lib/supabase/server';
import type { TypedSupabaseClient } from '@/lib/types';
import { getUser } from '@/utils/get-user';
import { cache } from 'react';

export const getProfileById = cache((client: TypedSupabaseClient, userId: string) => {
  return client
    .from('profiles')
    .select('username, display_name, created_at, avatar, id, email')
    .eq('id', userId)
    .single();
});

export const getProfileByUsername = async (username: string) => {
  const client = await createClient();

  return client
    .from('profiles')
    .select('username, display_name, created_at, avatar, id, email')
    .eq('username', username)
    .single();
};

export const getCurrentProfile = cache(async (userId?: string) => {
  if (!userId) return;

  const client = await createClient();

  const {
    data: { user }
  } = await getUser();

  if (!user) return;

  const profile = await client
    .from('profiles')
    .select('username, display_name, created_at, avatar, id, email')
    .eq('id', userId)
    .throwOnError()
    .single();

  return profile.data;
});
