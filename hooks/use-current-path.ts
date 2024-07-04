'use client';

import { usePathname } from 'next/navigation';

export const useCurrentPath = () => {
  const pathname = usePathname();

  return pathname.slice(1);
};
