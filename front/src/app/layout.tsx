import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/shared/styles/globals.scss";
import { MainProvider } from "@/shared/providers"
import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants/seo.constants";
import { Header } from "@/shared/components";
import { HeaderMenu } from "@/features/headerMenu/components/HeaderMenu"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(process.env.APP_URL as string),
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    emails: ['support@findsol.it']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MainProvider>
          <div className="flex min-h-screen flex-col">
            <Header>
              <HeaderMenu />
            </Header>
            <main className='flex-grow'>{children}</main>
            <footer className='bg-white py-5 items-center italic text-zinc-500 font-extralight text-sm text-center'>2025 FindSolution 2.0</footer>
          </div>
        </MainProvider>
      </body>
    </html>
  );
}