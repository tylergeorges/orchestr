import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 200,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      }
    ]
  },

  transpilePackages: ['lucide-react']

  // typedRoutes doesn't work with turbo
  // experimental: {
  //   typedRoutes: true
  // }
};

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(nextConfig);
