/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false
    },
    env: {
        SERVER_URL: process.env.SERVER_URL,
        GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY
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
        ],
        domains: ['localhost'],
    },
	async rewrites() {
		return [
			{
				source: '/static/:path*',
				destination: `${process.env.SERVER_URL}/static/:path*`
			}
		]
	}
};

export default nextConfig;
