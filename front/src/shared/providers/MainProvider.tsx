'use client'

import { type PropsWithChildren } from "react";
import { TanstackQueryProvider } from "./TanstackQueryProvider";
import { ThemeProvider, ToastProvider } from ".";
import { Provider } from "react-redux";
import { store } from "../store";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

export function MainProvider({ children }: PropsWithChildren<unknown>) {
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
            <ProgressBar
                height="4px"
                color="#F97316"
                options={{ showSpinner: false }}
                // shallowRouting
                // startPosition={0.3}
                stopDelay={1000}
            />
        </Provider>
    </TanstackQueryProvider>
}