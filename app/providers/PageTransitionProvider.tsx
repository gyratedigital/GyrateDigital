"use client";

import { usePathname } from "next/navigation";

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Always keep the page mounted so mobile can scroll immediately.
  // Hiding children until a timeout / fade caused a long blank freeze.
  return <div key={pathname} className="min-h-screen">{children}</div>;
}
