import { cn } from "@/utils/cn";

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Row = ({ children, className, ...props }: RowProps) => {
  return (
    <div className={cn("flex horizontal ", className)} {...props}>
      {children}
    </div>
  );
};
