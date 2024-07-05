'use client';

import type { Route } from 'next';
import { default as NextLink } from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';
import { IconNames, Icons } from '@/components/icons';

const useIsPathActive = (path: React.ReactNode) => {
  const pathname = usePathname();

  if (typeof path !== 'string') return false;

  if (path[0] !== '/') {
    return `/${path}` === pathname;
  }

  return pathname === path;
};

interface NextLinkProps extends React.ComponentProps<typeof NextLink> {}

interface LinkProps<T extends string> extends Omit<NextLinkProps, 'href'> {
  href: Route<T>;
}

export const Link = <T extends string>({ href, children, ...props }: LinkProps<T>) => {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
};

interface LinkProps<T extends string> extends Omit<NextLinkProps, 'href'> {
  href: Route<T>;
}

export const NavLink = <T extends string>({
  href,
  className,
  children,
  ...props
}: LinkProps<T>) => {
  const isActive = useIsPathActive(href);

  return (
    <Link
      href={href}
      className={cn(
        isActive ? 'font-medium text-foreground' : 'text-muted hover:text-muted-foreground',
        'capitalize transition',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

interface NavIconProps<T extends string, IconName extends IconNames = IconNames>
  extends LinkProps<T> {
  icon: IconName extends `${infer I}Fill` ? I : never;
}

export const NavIcon = <T extends string>({ href, className, icon, ...props }: NavIconProps<T>) => {
  const isActive = useIsPathActive(href);

  const currentIcon = isActive ? (`${icon}Fill` as const) : icon;

  const Icon = Icons[currentIcon];

  return (
    <Link
      href={href}
      className={cn(isActive ? 'text-primary' : 'text-muted', 'transition')}
      {...props}
    >
      <Icon className={cn('size-6', className)} />
    </Link>
  );
};
