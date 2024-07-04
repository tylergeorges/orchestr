import { forwardRef } from 'react';

import { cn } from '@/utils/cn';
import { Row } from '@/components/row';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <footer
        className={cn('sticky bottom-0 w-full border-t bg-background md:hidden', className)}
        ref={ref}
        {...props}
      >
        <Row className="relative h-[58px] w-full items-center justify-around">{children}</Row>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';
