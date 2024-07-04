interface TimeProps extends React.TimeHTMLAttributes<HTMLTimeElement> {}

export const Time = ({ children, suppressHydrationWarning = true, ...props }: TimeProps) => (
  <time {...props} suppressHydrationWarning={suppressHydrationWarning}>
    {children}
  </time>
);
