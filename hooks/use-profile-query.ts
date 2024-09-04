import type { QueryKey, UseQueryOptions } from '@tanstack/react-query';

import { getProfileByUsername } from '@/lib/queries/profile';

export const profileQueryKey = ['profile'];

interface Profile {
  username: string;
  display_name: string;
  created_at: string;
  avatar: string;
  id: string;
  email: string;
}

export const useProfileQuery = (
  username: string,
  queryOptions?: UseQueryOptions<Profile | null, Error, Profile | null, QueryKey>
) => {
  const queryFn = async (): Promise<Profile | null> => {
    const profile = await getProfileByUsername(username);

    return profile.data;
  };

  return {
    queryKey: [...profileQueryKey, username],
    queryFn,
    ...queryOptions
  };
};
