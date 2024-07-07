'use client';

import { useRouter } from 'next/navigation';

import type { Profiles } from '@/lib/types/supabase';

import { UserAvatar } from '@/components/user-avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Icons } from '@/components/icons';
import { cn } from '@/utils/cn';
import { useSupabaseBrowser } from '@/lib/supabase/client';

interface UserDropdownProps {
  profile: Profiles;
}

export const UserDropdown = ({ profile }: UserDropdownProps) => {
  const router = useRouter();
  const supabase = useSupabaseBrowser();

  const signout = async () => {
    await supabase.auth.signOut();

    router.push('/');
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar size="lg" avatar={profile?.avatar} />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="end"
        sideOffset={16}
        className={cn('w-56 bg-secondary p-1')}
      >
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="h-10 gap-2 text-sm font-semibold text-destructive/80 hover:bg-destructive/10 hover:text-destructive focus:bg-destructive/10 focus:text-destructive"
            onClick={signout}
          >
            <Icons.signout className="size-5" />
            Log Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
