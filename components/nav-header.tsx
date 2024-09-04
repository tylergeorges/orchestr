'use server';

import { getCurrentProfile } from '@/lib/queries/profile';
import { getUser } from '@/utils/get-user';

import { Header } from '@/components/ui/header';
import { Icons } from '@/components/icons';
import { Row } from '@/components/row';
import { Link } from '@/components/ui/link';
import { LoginButton } from '@/components/login-button';

import { UserDropdown } from '@/components/user-dropdown';

export const NavHeader = async () => {
  const {
    data: { user }
  } = await getUser();
  const profile = await getCurrentProfile(user?.id);

  return (
    <Header>
      <Row className="w-full gap-4">
        <Link href="/" className="group relative items-center gap-2 horizontal to-md:flex-1">
          <span className="group relative flex items-center justify-center overflow-hidden rounded-md text-primary">
            <Icons.orchestr className="size-8 text-brand" />
          </span>

          <h1 className="group -translate-x-1/2 text-xl font-bold opacity-0 transition duration-300 sm:translate-x-0 sm:opacity-100">
            Orchestr
          </h1>
        </Link>

        <div className="flex flex-1 items-center justify-end gap-2">
          {user && profile ? (
            <>
              <UserDropdown profile={profile} />
            </>
          ) : (
            <>
              <LoginButton />
            </>
          )}
        </div>
      </Row>
    </Header>
  );
};
