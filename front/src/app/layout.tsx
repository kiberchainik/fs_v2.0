import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/shared/styles/globals.scss";
import { MainProvider } from "@/shared/providers"
import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants/seo.constants"
import { Header } from "@/shared/components"
import { HeaderMenu } from "@/features/headerMenu/components/HeaderMenu"
import { getLocale, getMessages } from 'next-intl/server'
import Script from "next/script"
import { Footer } from "@/features/footer/components/Footer";
import { Suspense } from "react";
import I18nLoader from "@/shared/loaders/I18nLoader";

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
  return (
    <html lang='it'>
      <body className={`${manrope.variable} font-sans`}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3626047805353694"
          crossOrigin="anonymous"
        />
        <Suspense fallback={<div>Загрузка...</div>}>
          <I18nLoader>
            <MainProvider>
              <LayoutWithHeader>{children}</LayoutWithHeader>
            </MainProvider>
          </I18nLoader>
        </Suspense>
      </body>
    </html>
  )

  function LayoutWithHeader({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header>
          <HeaderMenu />
        </Header>
        <main className="flex-grow md:m-5">{children}</main>
        <Footer />
      </div>
    )
  }
}