"use client";

import {
  HydrationBoundary,
  type HydrationBoundaryProps
} from "@tanstack/react-query";

export function HydrationProvider({
  children,
  ...props
}: WithChildren<HydrationBoundaryProps>) {
  return <HydrationBoundary {...props}>{children}</HydrationBoundary>;
}
