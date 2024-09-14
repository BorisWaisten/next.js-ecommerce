"use client";

import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";
import { SearchProvider } from "./SearchContext";

export const NextAuthProvider = ({ children }) => {
  return (
    <Suspense>
      <SessionProvider>
        <SearchProvider>
          {children}
        </SearchProvider>
      </SessionProvider>
    </Suspense>
  ) 
};