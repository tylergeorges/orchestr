'use server';

import { redirect } from 'next/navigation';

import { getUser } from '@/utils/get-user';

import { Column } from '@/components/column';
import { LoginForm } from '@/components/login-form';

export default async function Login() {
  const {
    data: { user }
  } = await getUser();

  if (user) return redirect('/home');

  return (
    <Column className="h-full w-full p-8 py-8 horizontal center-h">
      <Column className="h-full w-full gap-3 space-y-6 center vertical sm:max-w-xs">
        <div>
          <h1 className="m-0 text-2xl font-bold">Welcome</h1>
        </div>
        <LoginForm />
      </Column>
    </Column>
  );
}
