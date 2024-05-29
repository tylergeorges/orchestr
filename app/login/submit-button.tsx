"use client";

import { useFormStatus } from "react-dom";

import { Icons } from "@/components/icons";
import { Button } from "@components/ui/button";
import React from "react";

interface Props extends React.ComponentProps<typeof Button> {
  pendingText?: string;
  loading?: boolean;
}

export function SubmitButton({
  children,
  loading,
  pendingText,
  ...props
}: Props) {
  const { pending, action } = useFormStatus();

  const isPending = loading || (pending && action === props.formAction);

  return (
    <Button
      {...props}
      fill
      type="submit"
      disabled={loading || pending}
      aria-disabled={loading || pending}
    >
      {isPending ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        children
      )}
    </Button>
  );
}
