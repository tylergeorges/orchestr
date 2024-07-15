interface SidebarProps {}

export const Sidebar = ({ children }: React.PropsWithChildren<SidebarProps>) => {
  return (
    <aside className="relative h-full justify-between gap-2 overflow-hidden vertical">
      {/* <aside className="relative h-full justify-between gap-2 overflow-hidden vertical md:w-64"> */}
      {children}
    </aside>
  );
};
