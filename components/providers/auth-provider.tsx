'use client';

import { Profiles } from '@/lib/types/supabase';
import { User } from '@supabase/supabase-js';
import { useMemo } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

const AuthContext = createContext<{ profile?: Profiles | null; user?: User | null } | null>(null);

interface AuthProviderProps {
  user?: User | null;
  profile?: Profiles | null;
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

  return user;
};
