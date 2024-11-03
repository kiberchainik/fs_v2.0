'use client'

import { type PropsWithChildren } from "react";
import { TanstackQueryProvider } from "./TanstackQueryProvider";
import { ThemeProvider, ToastProvider } from ".";
import { Provider } from "react-redux";
import { store } from "../store";

export function MainProvider({children}:PropsWithChildren<unknown>) {
    return <TanstackQueryProvider>
        <Provider store={store}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                disableTransitionOnChange
            >
                <ToastProvider />
                {children}
            </ThemeProvider>
        </Provider>
  </TanstackQueryProvider>
}