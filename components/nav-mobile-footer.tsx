'use client';

import { useCurrentPath } from '@/hooks/use-current-path';

import { Footer } from '@/components/ui/footer';
import { NavIcon } from '@/components/ui/link';

export const NavMobileFooter = () => {
  const pathname = useCurrentPath();

  if (pathname === '' || pathname === 'login') return null;

  return (
    <Footer>
      <NavIcon href="/home" icon="home" />
      {/* <NavIcon href="/activity" icon="bell" />
      <NavIcon href="/messages" icon="inbox" /> */}
    </Footer>
  );
};
