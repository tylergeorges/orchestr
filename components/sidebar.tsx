interface SidebarProps {}

export const Sidebar = ({ children }: React.PropsWithChildren<SidebarProps>) => {
  return (
    <div className="h-full justify-between gap-2 border border-r vertical md:w-64">{children}</div>
  );
};
