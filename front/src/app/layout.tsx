import type { Metadata } from "next"
import "@/shared/styles/globals.scss"
import { MainProvider } from "@/shared/providers"
import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants/seo.constants"
import { Header } from "@/shared/components"
import { HeaderMenu } from "@/features/headerMenu/components/HeaderMenu"
import Script from "next/script"
import { Footer } from "@/features/footer/components/Footer"
import I18nLoader from "@/i18n/I18nLoader"
import { getLocale } from "next-intl/server"

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
  return (
    <html lang={locale}>
      <head>
        <link
          rel="preload"
          href="/fonts/Manrope-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Manrope-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Manrope-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className='font-[Manrope]'>
        <Script
          async
          strategy="lazyOnload"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3626047805353694"
          crossOrigin="anonymous"
        />
        <I18nLoader>
          <MainProvider>
            <div className="flex min-h-screen flex-col">
              <Header>
                <HeaderMenu />
              </Header>
              <main className="flex-grow md:m-5">{children}</main>
              <Footer />
            </div>
          </MainProvider>
        </I18nLoader>
      </body>
    </html>
  )
}