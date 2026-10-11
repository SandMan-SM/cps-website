/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/services/:service",
        destination: "/solutions/:service",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
