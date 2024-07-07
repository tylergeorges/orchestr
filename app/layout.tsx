import './globals.css';

import type { Metadata } from 'next';
import { Toaster } from 'sonner';

import { cn } from '@/utils/cn';
import { fontMono, fontSans } from '@/lib/fonts';
import { getBaseUrl } from '@/utils/get-base-url';

import { ModalRenderer } from '@/components/modal';
import { ReactQueryClientProvider } from '@/components/providers/react-query-client-provider';
import { NavHeader } from '@/components/nav-header';
import { NavMobileFooter } from '@/components/nav-mobile-footer';

const defaultUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: 'orchestr',
    template: `%s | orchestr`
  },
  description: 'Orchestr posts.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="relative h-full w-full" lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn(
          'relative flex h-full w-full flex-1 flex-col overflow-hidden bg-background font-sans text-foreground antialiased',
          fontMono.variable,
          fontSans.variable
        )}
      >
        <ReactQueryClientProvider>
          <ModalRenderer />
          <Toaster
            toastOptions={{
              classNames: {
                toast: 'flex items-center rounded-md border-none text-primary',

                success: 'bg-success text-primary',

                error: 'bg-destructive text-destructive-foreground',

                warning: 'bg-warning text-warning-foreground',

                title: 'font-bold',

                description: 'text-current/90'
              }
            }}
          />

          <NavHeader />

          <main className="w-full flex-1 overflow-auto">{children}</main>
          <NavMobileFooter />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
