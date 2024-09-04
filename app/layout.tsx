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
    <html className="h-full" lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn(
          'relative flex size-full bg-background font-sans text-foreground antialiased vertical',
          fontMono.variable,
          fontSans.variable
        )}
      >
        <ReactQueryClientProvider>
          <ModalRenderer />
          <Toaster
            richColors
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

          <div className="relative  flex-1 vertical">
            <NavHeader />

            {children}

            <NavMobileFooter />
          </div>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
