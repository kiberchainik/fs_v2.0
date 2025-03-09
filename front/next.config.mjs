import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    experimental: {
        missingSuspenseWithCSRBailout: false
    },
    env: {
        SERVER_URL: process.env.SERVER_URL,
        GOOGLE_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'avatars.yandex.net'
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/static/:path*',
                destination: `${process.env.SERVER_URL}/static/:path*`
            }
        ]
    }
}

export default withNextIntl(nextConfig)