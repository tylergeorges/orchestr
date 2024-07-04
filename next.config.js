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

  // transpilePackages: ['lucide-react'] // add this

  // experimental: {
  //   typedRoutes: true
  // }
};

export default nextConfig;
