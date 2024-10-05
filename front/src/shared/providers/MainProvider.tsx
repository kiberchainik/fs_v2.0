'use client'

import { type PropsWithChildren } from "react";
import { TanstackQueryProvider } from "./TanstackQueryProvider";
import { ThemeProvider, ToastProvider } from ".";

export function MainProvider({children}:PropsWithChildren<unknown>) {
    return <TanstackQueryProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
        >
            <ToastProvider />
            {children}
        </ThemeProvider>
  </TanstackQueryProvider>
}