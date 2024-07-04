'use client';

import { Profiles } from '@/lib/types/supabase';
import { User } from '@supabase/supabase-js';
import { useMemo } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

const AuthContext = createContext<{ profile: Profiles; user: User } | null>(null);

interface AuthProviderProps {
  user: User;
  profile: Profiles;
}

export const AuthProvider = ({ children, user, profile }: WithChildren<AuthProviderProps>) => {
  const value = useMemo(() => {
    return {
      profile,
      user
    };
  }, [profile, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUser = () => {
  const user = useContextSelector(AuthContext, v => v);

  if (!user) {
    throw Error('User context not set.');
  }

  return user;
};
