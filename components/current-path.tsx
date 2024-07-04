'use client';
import { useCurrentPath } from '@/hooks/use-current-path';

export const CurrentPath = () => {
  const pathname = useCurrentPath();

  return <>{pathname}</>;
};
