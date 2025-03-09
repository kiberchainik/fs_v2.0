"use client";

import { createContext, useContext } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY || "";

const ReCaptchaContext = createContext<{ executeRecaptcha: () => Promise<string | null> }>({
    executeRecaptcha: async () => null,
});

export function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
            <ReCaptchaWrapper>{children}</ReCaptchaWrapper>
        </GoogleReCaptchaProvider>
    );
}

function ReCaptchaWrapper({ children }: { children: React.ReactNode }) {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleExecuteRecaptcha = async () => {
        if (!executeRecaptcha) {
            console.warn("executeRecaptcha is not yet available");
            return null;
        }
        return await executeRecaptcha();
    };

    return (
        <ReCaptchaContext.Provider value={{ executeRecaptcha: handleExecuteRecaptcha }}>
            {children}
        </ReCaptchaContext.Provider>
    );
}

export const useReCaptcha = () => useContext(ReCaptchaContext)