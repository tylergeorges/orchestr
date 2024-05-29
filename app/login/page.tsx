"use client";

import { Provider } from "@supabase/supabase-js";
import Link from "next/link";
import { useState } from "react";

import { createClient } from "@/lib/supabase/client";

import { signIn } from "@/app/login/actions";
import { Icons } from "@/components/icons";
import { Divider } from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "./submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const [isProviderLoading, setIsProviderLoading] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const isLoading = isProviderLoading || isAuthLoading;

  const signInWith = async (provider: Provider) => {
    if (isLoading) return;

    const supabase = createClient();

    setIsProviderLoading(true);

    await supabase.auth
      .signInWithOAuth({
        provider,

        // options: {
        //   // redirectTo: "auth/callback"
        //   redirectTo: "http://localhost:3000/auth/callback",
        // },
      })
      .finally(() => {
        setIsProviderLoading(false);
      });

    // return signIn.authenticateWithRedirect({
    // 	strategy,
    // 	redirectUrl: "/sso-callback",
    // 	redirectUrlComplete: "/home"
    // });
  };

  return (
    <div className="w-full horizontal center-h h-full">
      <div className="vertical  w-full px-8 sm:max-w-md  h-full gap-2">
        <Link
          href="/"
          className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover horizontal center-h group text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>{" "}
          Back
        </Link>

        <form className="animate-in flex-1 vertical center-v gap-4 text-foreground">
          <span className="vertical gap-2">
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="you@example.com" required />
          </span>

          <SubmitButton formAction={signIn} variant="brand" loading={isLoading}>
            Sign In
          </SubmitButton>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}

          <Divider className="uppercase">or</Divider>

          <SubmitButton
            onClick={() => {
              signInWith("google");
            }}
            loading={isLoading}
          >
            <Icons.google className="h-4 w-4" />
            Google
          </SubmitButton>
        </form>
      </div>
    </div>
  );
}
