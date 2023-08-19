"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { SessionProvider } from 'next-auth/react'


export function Providers({ children, session }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <SessionProvider session={session}>
      {children}
      </SessionProvider>
    </ThemeProvider>
  );
}
