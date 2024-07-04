"use client";

import { Icons } from "@/components/icons";
import { Sidebar } from "@/components/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";

export const SidebarNav = () => {
  return (
    <Sidebar>
      <div className="vertical gap-2">
        <Button
          size="lg"
          variant="ghost"
          fill
          className="mb-4 py-7 px-2 justify-between items-center "
        >
          <div className="flex min-w-[0] items-center gap-2">
            <span className="size-7  bg-brand rounded-lg vertical center" />

            <span className="vertical text-left  flex-1 justify-start">
              <h1 className="text-sm m-0 p-0">kneadlez</h1>

              <span className="text-2xs text-muted-foreground">
                tmg320v@gmail.com
              </span>
            </span>
          </div>

          <Icons.cheveronVert className="size-4 shrink-0  text-muted-foreground" />
        </Button>

        <ButtonLink
          href="/projects"
          size="sm"
          fill
          active
        >
          <Icons.blocks className="size-4 " />
          Projects
        </ButtonLink>

        <ButtonLink
          href="/inbox"
          size="sm"
          fill
          className=" justify-between horizontal flex items-center"
          active={false}
        >
          <span className="horizontal gap-2 items-center">

          <Icons.inbox className="size-4" />
          Inbox
          </span>

          <Badge variant="secondary">9</Badge>
        </ButtonLink>
      </div>

      <Button size="sm" fill className="rounded-lg text-left " variant="ghost">
        <Icons.settings className="size-4 " />
        Settings
        
        <Badge
          variant="brand"
          position="top-right"
         />
      </Button>
    </Sidebar>
  );
};
