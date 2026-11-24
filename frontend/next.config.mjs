/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/metta",
        destination: "http://backend:5001/metta",
      },
      {
        source: "/api/metta_stateless",
        destination: "http://backend:5001/metta_stateless",
      }

    ]
  },
}

export default nextConfig
