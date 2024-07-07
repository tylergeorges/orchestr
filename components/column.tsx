import { cn } from '@/utils/cn';

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Column = ({ children, className, ...props }: ColumnProps) => {
  return (
    <div className={cn('flex vertical', className)} {...props}>
      {children}
    </div>
  );
};
