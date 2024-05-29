import { fontMono, fontSans } from "@/lib/fonts";

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "orchestr",
    template: `%s | orchestr`,
  },
  description: "Orchestr your projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn(
          "h-screen w-screen  font-sans antialiased bg-background text-foreground",
          fontMono.variable,
          fontSans.variable
        )}
      >
        <main className="relative flex-1 w-screen h-full">{children}</main>
      </body>
    </html>
  );
}
