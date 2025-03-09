import type { Metadata } from "next"
import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants/seo.constants"
import { ReCaptchaProvider } from "@/shared/providers/ReCaptchaProvider";

export const metadata: Metadata = {
    title: {
        absolute: SITE_NAME
    },
    description: SITE_DESCRIPTION,
    metadataBase: new URL(process.env.APP_URL as string),
    openGraph: {
        images: [{ url: '/public/favicon.ico' }],
        type: 'website',
        siteName: SITE_NAME,
        emails: ['support@findsol.it']
    }
};

export default async function ContattiLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ReCaptchaProvider>
            {children}
        </ReCaptchaProvider>
    );
}