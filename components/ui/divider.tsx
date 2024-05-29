import { cn } from "@/lib/utils";

export const Divider = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => (
  <div className="relative">
    <div className="absolute inset-0 flex items-center ">
      <span className="w-full border-t border-secondary-foreground/[0.1]" />
    </div>

    <div className="relative flex justify-center text-sm ">
      <span
        className={cn(
          "px-2 text-sm bg-background font-bold text-muted-foreground",
          className
        )}
      >
        {children}
      </span>
    </div>
  </div>
);
