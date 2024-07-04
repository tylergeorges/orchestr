'use server';
import { getCurrentProfile } from '@/lib/queries/profile';

import { Header } from '@/components/ui/header';
import { Icons } from '@/components/icons';
import { Row } from '@/components/row';
import { Link, NavIcon } from '@/components/ui/link';
import { UserAvatar } from '@/components/user-avatar';
import { LoginButton } from '@/components/login-button';
import { getUser } from '@/utils/get-user';

export const NavHeader = async () => {
  const { data } = await getUser();
  const profile = await getCurrentProfile(data?.user?.id);

  return (
    <Header>
      <Row className="w-full gap-4">
        <Link href="/" className="group relative items-center gap-2 horizontal to-md:flex-1">
          <span className="group relative flex items-center justify-center overflow-hidden rounded-md text-primary">
            <Icons.orchestr className="size-10 md:size-7 text-current" />
          </span>

          <h1 className="group -translate-x-1/2 text-xl font-bold opacity-0 transition duration-300 sm:translate-x-0 sm:opacity-100">
            Orchestr
          </h1>
        </Link>

        <div className="flex flex-1 items-center justify-end gap-2">
          {profile ? (
            <>
              {/* <span className="flex-1 items-center text-sm font-medium capitalize text-primary horizontal center-h to-md:hidden">
                <CurrentPath />
              </span> */}

              <NavIcon
                icon="inbox"
                href="/messages"
                className="size-5 cursor-pointer text-muted transition hover:text-muted-foreground to-md:hidden"
              />

              <NavIcon
                icon="bell"
                href="/activity"
                className="size-5 cursor-pointer text-muted transition hover:text-muted-foreground to-md:hidden"
              />

              <UserAvatar size="lg" avatar={profile?.avatar} />
            </>
          ) : (
            <>
              <LoginButton  />
            </>
          )}
        </div>
      </Row>
    </Header>
  );
};
