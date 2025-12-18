"use client";

import PageTransitionProvider from "./providers/PageTransitionProvider";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransitionProvider>{children}</PageTransitionProvider>;
}