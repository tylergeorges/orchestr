import React from "react";

interface SidebarProps {}

export const Sidebar = ({
  children
}: React.PropsWithChildren<SidebarProps>) => {
  return (
    <div className="md:w-64 h-full vertical border-r border gap-2 justify-between">
      {children}
    </div>
  );
};
