import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/shared/styles/globals.scss";
import { MainProvider } from "@/shared/providers"
import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants/seo.constants";
import { Header } from "@/shared/components";

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
    emails:['support@findsol.it']
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
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              <Header></Header>
              {children}
            </div>
          </div>
        </MainProvider>
      </body>
    </html>
  );
}