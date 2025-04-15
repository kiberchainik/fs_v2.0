import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/shared/styles/globals.scss";
import { MainProvider } from "@/shared/providers"
import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants/seo.constants"
import { Header } from "@/shared/components"
import { HeaderMenu } from "@/features/headerMenu/components/HeaderMenu"
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import Script from "next/script"
import { Footer } from "@/features/footer/components/Footer";

const manrope = localFont({
  src: [
    {
      path: './fonts/Manrope-Regular.ttf',
      weight: '400'
    },
    {
      path: './fonts/Manrope-Light.ttf',
      weight: '300'
    },
    {
      path: './fonts/Manrope-Bold.ttf',
      weight: '700'
    },
    {
      path: './fonts/Manrope-ExtraBold.ttf',
      weight: '900'
    }
  ],
  variable: '--font-manrope'
});

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
    emails: ['support@lavidea.it']
  },
  other: {
    'facebook-domain-verification': 'ykvbo5lqufom689mxmyogtm0d5zc17',
    'google-site-verification': '0-SxUnlXdEVnRnkqTLYNePgGLKVpLL3EL8O-klP3r_I'
  }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${manrope.variable} font-sans`}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3626047805353694"
          crossOrigin="anonymous"
        />
        <NextIntlClientProvider messages={messages}>
          <MainProvider>
            <div className="flex min-h-screen flex-col">
              <Header>
                <HeaderMenu />
              </Header>
              <main className='flex-grow md:m-5'>{children}</main>
              <Footer />
            </div>
          </MainProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}