/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'https://api.hyphen.im/hb0081000398',
            },
        ]
    },
}

module.exports = nextConfig
