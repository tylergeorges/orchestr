import { forwardRef } from 'react';

import { cn } from '@/utils/cn';
import { Row } from '@/components/row';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <header
        className={cn('container sticky top-0 z-10 flex w-full bg-background px-6 py-5')}
        ref={ref}
        {...props}
      >
        <Row
          className={cn(
            'relative mx-auto h-[58px] w-full items-center gap-4 bg-background p-3 text-center',
            className
          )}
        >
          {children}
        </Row>
      </header>
    );
  }
);

Header.displayName = 'Header';
