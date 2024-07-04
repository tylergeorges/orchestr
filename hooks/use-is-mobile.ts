'use client';

import { useMediaQuery } from '@/hooks/use-media-query';

export const useIsMobile = () => {
  return useMediaQuery('screen and (max-width: 768px)');
};
